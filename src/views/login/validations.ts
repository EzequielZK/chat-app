import { z } from 'zod';

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, { message: 'Nome é obrigatório' })
      .max(45, { message: 'Nome não pode ultrapassar 45 caracteres.' }),
    email: z
      .string()
      .trim()
      .toLowerCase()
      .email({ message: 'E-mail inválido' }),
    password: z
      .string()
      .regex(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/, {
        message:
          'Senha deve conter entre 6 e 20 caracteres, letras maiúsculas e minúsculas, um caracter especial e um número',
      }),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Senhas não conferem',
    path: ['confirmPassword'],
  });

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email({ message: 'E-mail inválido' }),
  password: z.string(),
});
