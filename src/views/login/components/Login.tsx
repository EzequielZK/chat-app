import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { LoginProps } from '../types';

export default function LoginComponent({ handleScreen }: LoginProps) {
  return (
    <>
      <span className='text-4xl'>ChatApp</span>
      <div className='flex flex-col'>
        <label className='text-xs font-bold' htmlFor='login'>
          Login
        </label>
        <Input
          name='login'
          className='border-none bg-primary-foreground text-secondary-foreground'
        />
      </div>
      <div className='flex flex-col'>
        <label className='text-xs font-bold' htmlFor='password'>
          Senha
        </label>
        <Input
          className='border-none bg-primary-foreground text-secondary-foreground'
          name='password'
        />
        <Button
          className='text-xs self-end p-0 text-primary-foreground'
          variant='link'
        >
          Esqueci minha senha
        </Button>
      </div>
      <Link href='/chat'>
        <Button variant='secondary'>Entrar</Button>
      </Link>
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
