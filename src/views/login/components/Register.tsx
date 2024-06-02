import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RegisterBody, RegisterProps } from '../types';
import RegisterAction from '../actions/register';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../validations';

type RegisterSchemaType = z.infer<typeof registerSchema>;

export default function RegisterComponent({ handleScreen }: RegisterProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const handleRegister = async (formData: RegisterSchemaType) => {
    const values = {
      ...formData,
    };

    const response = await RegisterAction(values as RegisterBody);

    if (!response.ok) {
      toast.error(response.message, { position: 'top-center' });
      return;
    }
    toast.success(response.message, { position: 'top-center' });
    handleScreen('login');
  };

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <form
        className='flex flex-col gap-6 w-80'
        onSubmit={handleSubmit(handleRegister)}
      >
        <span className='text-4xl'>Cadastre-se</span>

        <div className='flex flex-col'>
          <label className='text-xs font-bold' htmlFor='name'>
            Nome
          </label>
          <Input
            className='border-none bg-primary-foreground text-secondary-foreground'
            {...register('name')}
          />
          {errors.name && (
            <span className='text-red-500 text-xs'>{errors.name.message}</span>
          )}
        </div>
        <div className='flex flex-col'>
          <label className='text-xs font-bold' htmlFor='email'>
            E-mail
          </label>
          <Input
            type='email'
            className='border-none bg-primary-foreground text-secondary-foreground'
            {...register('email')}
          />
          {errors.email && (
            <span className='text-red-500 text-xs'>{errors.email.message}</span>
          )}
        </div>
        <div className='flex flex-col'>
          <label className='text-xs font-bold' htmlFor='password'>
            Senha
          </label>
          <Input
            className='border-none bg-primary-foreground text-secondary-foreground'
            {...register('password')}
            type='password'
          />
          {errors.password && (
            <span className='text-red-500 text-xs'>
              {errors.password.message}
            </span>
          )}
        </div>
        <div className='flex flex-col'>
          <label className='text-xs font-bold' htmlFor='confirmPassword'>
            Confirmar Senha
          </label>
          <Input
            className='border-none bg-primary-foreground text-secondary-foreground'
            {...register('confirmPassword')}
            type='password'
          />
          {errors.confirmPassword && (
            <span className='text-red-500 text-xs'>
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <Button
          type='submit'
          variant='secondary'
          //   onClick={() => handleScreen('login')}
        >
          Cadastrar
        </Button>
      </form>
    </div>
  );
}
