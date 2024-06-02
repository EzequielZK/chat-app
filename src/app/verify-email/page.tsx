'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import VerifyToken from './verifyToken';
import { LOGIN_PAGE } from '@/urlPages';
import { toast } from 'react-toastify';

export default function VerifyEmail() {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const navigateAfterValidation = async () => {
    const response = await VerifyToken(token);
    if (!response.ok) {
      toast.error(response.message, { position: 'top-center' });
      console.error(response.message);
    } else {
      toast.success(response.message, { position: 'top-center' });
    }
    push(LOGIN_PAGE);
  };

  navigateAfterValidation();

  return (
    <div className='w-full flex items-center'>
      <span className='text-black'>
        Você será redirecionado para tela de login em alguns instantes...
      </span>
    </div>
  );
}
