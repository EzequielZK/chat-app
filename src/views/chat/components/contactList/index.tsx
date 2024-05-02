import { EllipsisVertical, Search } from 'lucide-react';
import ContactButton from './ContactButton';

export default function ContactList() {
  return (
    <div className='flex flex-col bg-background p-4 gap-4 min-w-96'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='size-14 bg-paper rounded-full' />

          <span className='text-primary font-bold'>Ezequiel Lara</span>
        </div>
        <EllipsisVertical />
      </div>
      <div className='flex gap-2 items-center bg-paper rounded-lg p-2'>
        <Search />
        <input className='w-full bg-paper text-xs' placeholder='Search for contact' />
      </div>
      <div className='w-full h-px bg-white' />
      <div className='flex flex-col gap-4 w-full'>
        <ContactButton />
        <ContactButton />
        <ContactButton />
        <ContactButton />
      </div>
    </div>
  );
}
