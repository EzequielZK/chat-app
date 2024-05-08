import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RegisterBody, RegisterProps } from '../types';
import RegisterAction from '../actions/register';
import { toast } from 'react-toastify';

export default function RegisterComponent({ handleScreen }: RegisterProps) {
  const handleRegister = async (formData: FormData) => {
    const values = {
      name: formData.get('name'),
      image: formData.get('image'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    };

    // console.log({ values });
    toast.success('Usuário cadastrado com sucesso', { position: 'top-center' });
    await RegisterAction(values as RegisterBody);
    handleScreen('login');
  };

  return (
    <>
      <form
        className='flex flex-col items-center justify-center gap-6'
        action={handleRegister}
      >
        <span className='text-4xl'>Cadastre-se</span>

        <div className='flex flex-col'>
          <label className='text-xs font-bold' htmlFor='name'>
            Nome
          </label>
          <Input
            name='name'
            className='border-none bg-primary-foreground text-secondary-foreground'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-xs font-bold' htmlFor='email'>
            E-mail
          </label>
          <Input
            className='border-none bg-primary-foreground text-secondary-foreground'
            name='email'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-xs font-bold' htmlFor='password'>
            Senha
          </label>
          <Input
            className='border-none bg-primary-foreground text-secondary-foreground'
            name='password'
            type='password'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-xs font-bold' htmlFor='confirmPassword'>
            Confirmar Senha
          </label>
          <Input
            className='border-none bg-primary-foreground text-secondary-foreground'
            name='confirmPassword'
            type='password'
          />
        </div>

        <Button
          type='submit'
          variant='secondary'
          //   onClick={() => handleScreen('login')}
        >
          Cadastrar
        </Button>
      </form>
    </>
  );
}
