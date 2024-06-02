'use server';
import jwt from 'jsonwebtoken';
import { toast } from 'react-toastify';
import { ActionResponse, UserData } from '@/lib/types';
import { prisma } from '@/lib/prisma';

export default async function VerifyToken(
  token: string | null
): Promise<ActionResponse> {
  let response: ActionResponse = {
    ok: true,
    code: 200,
    message: 'E-mail verificado com sucesso',
  };

  const editUserEmailVerified = async (payload: jwt.JwtPayload) => {
    await prisma.user.update({
      where: { id: payload.user.id },
      data: { emailVerified: true },
    });
  };

  jwt.verify(
    token ?? '',
    process.env.AUTH_SECRET ?? '',
    async (err, decoded) => {
      if (err) {
        response = { ok: false, code: 500, message: 'Ocorreu um erro interno e não foi possível verificar seu e-mail' };
      } else {
        editUserEmailVerified(decoded as jwt.JwtPayload);
      }
    }
  );
  return response;
}
