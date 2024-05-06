import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function LoginComponent() {
  return (
    <div className='text-foreground p-8 bg-card h-full w-1/3 flex flex-col items-center justify-center gap-6 shadow-md'>
      <span className='text-4xl'>ChatApp</span>
      <div className='flex flex-col'>
        <label className='text-xs font-bold' htmlFor='login'>
          Login
        </label>
        <Input name='login' />
      </div>
      <div className='flex flex-col'>
        <label className='text-xs font-bold' htmlFor='password'>
          Senha
        </label>
        <Input name='password'/>
        <Button className='text-xs self-end p-0' variant='link'>
          Esqueci minha senha
        </Button>
      </div>
      <Link href='/chat'>
        <Button >Entrar</Button>
      </Link>
      <div className='flex items-center gap-1'>
        <span className='text-xs'>Não possui cadastro ?</span>
        <Button variant='link' className='p-0'>
          Cadastre-se
        </Button>
      </div>
    </div>
  );
}
