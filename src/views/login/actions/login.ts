'use server';

import { LoginBody } from '../types';
import { prisma } from '@/lib/prisma';
import { ActionResponse } from '@/lib/types';
import bcrypt from 'bcrypt';
import { loginSchema } from '../validations';

export default async function LoginAction({
  email,
  password,
}: LoginBody): Promise<ActionResponse> {
  try {
    const validation = loginSchema.safeParse({
      email,
      password,
    });

    if (!validation.success) {
      throw { code: 400, message: validation.error.message, ok: false };
    }

    const user = await prisma.user.findUnique({
      where: { email },
      include: { password: true },
    });

    if (
      !user ||
      !bcrypt.compareSync(password, user.password?.password as string)
    ) {
      throw { code: 401, message: 'E-mail e/ou senha incorretos', ok: false };
    }

    if (!user.emailVerified) {
      throw {
        code: 403,
        message: 'Verifique seu e-mail para acessar a plataforma',
        ok: false,
      };
    }

    return {
      code: 200,
      message: 'Usuário logado com sucesso',
      ok: true,
      data: user,
    };
  } catch (err: any) {
    return {
      ...err,
    };
  } finally {
    await prisma.$disconnect();
  }
}
