import { EllipsisVertical, Search } from 'lucide-react';
import ContactButton from './ContactButton';
import { Input } from '@/components/ui/input';

export default function ContactList() {
  return (
    <div className='flex flex-col bg-card p-4 gap-4 min-w-96 shadow-md z-10'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='size-14 bg-primary rounded-full' />

          <span className='text-primary font-bold'>Ezequiel Lara</span>
        </div>
        <EllipsisVertical />
      </div>
      <div className='flex gap-2 items-center rounded-lg border border-input p-2'>
        <Search />
        <Input className='w-full border-none shadow-none' placeholder='Search for contact' />
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
