import { SendHorizonal, Smile } from 'lucide-react';

export default function Conversation() {
  return (
    <div className='bg-paper w-full flex flex-col'>
      <div className='flex flex-col p-4 gap-4'>
        <div className='flex items-center gap-2'>
          <div className='size-14 bg-background rounded-full' />

          <span className='text-primary font-bold'>Ezequiel Lara</span>
          <div className='size-4 rounded-full bg-green' />
        </div>
        <div className='w-full h-px bg-background' />
      </div>
      <div className='flex flex-col flex-1 justify-end p-4'>
        <div className='p-4 rounded-lg bg-primary max-w-5xl self-end'>
          <span className='text-background'>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ullamcorper magna sapien, eu pharetra augue viverra sit amet.
          </span>
        </div>
      </div>
      <div className='flex items-center gap-4 w-full bg-background p-4'>
        <Smile />
        <input className='w-full bg-paper p-2 rounded-lg text-xs' placeholder='Digite uma mensagem' />
        <SendHorizonal />
      </div>
    </div>
  );
}
