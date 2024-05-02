export default function ContactButton() {
  return (
    <div className='flex items-start gap-2 '>
      <div className='size-14 bg-paper rounded-full' />
      <div className='flex-1 flex flex-col gap-1 w-full'>
        <div className='flex items-center justify-between'>
          <span className='text-primary font-bold text-sm'>Ezequiel Lara</span>
          <span className='text-xs '>18:00</span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-xs '>Ultimas msgs</span>
          <span className='text-xs text-primary font-bold'>1</span>
        </div>
      </div>
    </div>
  );
}
