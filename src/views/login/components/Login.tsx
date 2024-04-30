export default function LoginComponent() {
  return (
    <div className='text-background p-8 bg-primary h-full w-1/3 flex flex-col items-center justify-center gap-6'>
      <span className='text-4xl'>ChatApp</span>
      <div className='flex flex-col'>
        <label className='text-xs font-bold' htmlFor='login'>
          Login
        </label>
        <input name='login' />
      </div>
      <div className='flex flex-col'>
        <label className='text-xs font-bold' htmlFor='password'>
          Senha
        </label>
        <input name='password' />
        <span className='text-xs self-end'>Esqueci minha senha</span>
      </div>
      <button>Entrar</button>
      <span className='text-xs'>Não possui cadastro ? Cadastre-se</span>
    </div>
  );
}
