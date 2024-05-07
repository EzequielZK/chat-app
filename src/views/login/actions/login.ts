import isEmail from '@/lib/validations/isEmail';
import { LoginBody } from '../types';
import { prisma } from '@/lib/prisma';
import { ActionResponse } from '@/lib/types';
import bcrypt from 'bcrypt';

export default async function LoginAction({
  email,
  password,
}: LoginBody): Promise<ActionResponse> {
  if (!isEmail(email).error) {
    return { code: 400, message: 'E-mail ou senha inválidos', ok: false };
  }

  const user = await prisma.user.findUnique({
    where: { email },
    include: { password: true },
  });

  if (user && bcrypt.compareSync(password, user.password?.password as string)) {
    return {
      code: 200,
      message: 'Usuário logado com sucesso',
      ok: true,
      data: user,
    };
  }

  return { code: 401, message: 'E-mail e/ou senha incorretos', ok: false };
}
