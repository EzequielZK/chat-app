'use server';

import { RegisterBody } from '../types';
import { prisma } from '@/lib/prisma';
import { ActionResponse } from '@/lib/types';
import bcrypt from 'bcrypt';
import { registerSchema } from '../validations';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function RegisterAction({
  name,
  email,
  password,
  confirmPassword,
}: RegisterBody): Promise<ActionResponse> {
  try {
    const validation = registerSchema.safeParse({
      name,
      email,
      password,
      confirmPassword,
    });

    if (!validation.success) {
      throw { code: 400, message: validation.error.message, ok: false };
    }

    const salt = bcrypt.genSaltSync();
    const passwordHash = bcrypt.hashSync(password, salt);

    if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
      throw { code: 400, message: 'Senhas não conferem', ok: false };
    }

    const foundUser = await prisma.user.findUnique({ where: { email } });
    if (foundUser) {
      throw { code: 400, message: 'Usuário já cadastrado', ok: false };
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: {
          create: {
            password: passwordHash,
          },
        },
      },
    });

    const emailToken = jwt.sign({ user }, process.env.AUTH_SECRET ?? '', {
      expiresIn: '1 day',
    });

    transporter.sendMail(
      {
        from: 'chat67241@gmail.com',
        to: email,
        subject: 'New Account',
        html: `<p>Clique <a href="${process.env.BASE_URL}/verify-email?token=${emailToken}">aqui</a> para autenticar</p> `,
      },
      (err, info) => {
        console.log(err?.message);
      }
    );

    return {
      code: 200,
      message: 'Usuário criado com sucesso',
      ok: true,
      data: user,
    };
  } catch (err: any) {
    return {
      ...err,
    };
  } finally {
    prisma.$disconnect();
  }
}