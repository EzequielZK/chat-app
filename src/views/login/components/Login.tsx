import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { LoginBody, LoginProps } from '../types';
import { z } from 'zod';
import { loginSchema } from '../validations';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import LoginAction from '../actions/login';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

type LoginSchemaType = z.infer<typeof loginSchema>;

export default function LoginComponent({ handleScreen }: LoginProps) {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (formData: LoginSchemaType) => {
    const values = {
      ...formData,
    };

    const response = await LoginAction(values as LoginBody);

    if (!response.ok) {
      toast.error(response.message, { position: 'top-center' });
      return;
    }
    toast.success(response.message, { position: 'top-center' });
    push('/chat');
  };

  return (
    <>
      <span className='text-4xl'>ChatApp</span>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <form
          className='flex flex-col gap-6 w-80'
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className='flex flex-col'>
            <label className='text-xs font-bold' htmlFor='login'>
              Login
            </label>
            <Input
              {...register('email')}
              className='border-none bg-primary-foreground text-secondary-foreground'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-xs font-bold' htmlFor='password'>
              Senha
            </label>
            <Input
              type='password'
              className='border-none bg-primary-foreground text-secondary-foreground'
              {...register('password')}
            />
            <Button
              className='text-xs self-end p-0 text-primary-foreground'
              variant='link'
            >
              Esqueci minha senha
            </Button>
          </div>

          <Button type='submit' variant='secondary'>
            Entrar
          </Button>
        </form>
      </div>
      <div className='flex items-center gap-1'>
        <span className='text-xs'>Não possui cadastro ?</span>
        <Button
          onClick={() => handleScreen('register')}
          variant='link'
          className='p-0 text-primary-foreground text-xs'
        >
          Cadastre-se
        </Button>
      </div>
    </>
  );
}
