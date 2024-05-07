'use server';

import isEmail from '@/lib/validations/isEmail';
import { RegisterBody } from '../types';
import { prisma } from '@/lib/prisma';
import { ActionResponse } from '@/lib/types';
import isValidPassword from '@/lib/validations/isValidPassword';
import bcrypt from 'bcrypt';

export default async function RegisterAction({
  name,
  image,
  email,
  password,
  confirmPassword,
}: RegisterBody): Promise<ActionResponse> {
  if (!isEmail(email).error) {
    return { code: 400, message: 'E-mail inválido', ok: false };
  }

  if (!isValidPassword(password).error) {
    return {
      code: 400,
      message:
        'Senha precisar ter: uma letra maiúscula, uma letra minúscula, um número, uma caractere especial(@#$%) e tamanho entre 6-20.',
      ok: false,
    };
  }

  const salt = bcrypt.genSaltSync();
  const passwordHash = bcrypt.hashSync(password, salt);

  if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
    return { code: 400, message: 'Senhas não conferem', ok: false };
  }

  const foundUser = await prisma.user.findUnique({ where: { email } });
  if (foundUser) {
    return { code: 400, message: 'Usuário já cadastrado', ok: false };
  }

  const user = await prisma.user.create({
    data: {
      name,
      image,
      email,
      password: {
        create: {
          password,
        },
      },
    },
  });

  return {
    code: 200,
    message: 'Usuário criado com sucesso',
    ok: true,
    data: user,
  };
}
