import { Input } from '@/components/ui/input';
import { SendHorizonal, Smile } from 'lucide-react';
import conversation from '../../../../server.json';

export default function Conversation() {
  const messageConfig = {
    me: {
      position: 'self-end',
      color: 'bg-primary',
      text: 'text-primary-foreground',
    },
    other: {
      position: 'self-start',
      color: 'bg-card',
      text: 'text-card-foreground',
    },
  };

  return (
    <div className='bg-background w-full flex flex-col'>
      <div className='flex flex-col p-4 gap-4 bg-card shadow-md'>
        <div className='flex items-center gap-2'>
          <div className='size-14 bg-primary rounded-full' />

          <span className='text-primary font-bold'>Ezequiel Lara</span>
          <div className='size-4 rounded-full bg-green' />
        </div>
      </div>
      <div className='flex flex-col flex-1 justify-end'>
        {conversation.data.chats.map(chat => (
          <div key={chat.id} className='flex flex-col'>
            <div className='self-center p-2'>
              {new Date(chat.date).toDateString()}
            </div>
            {chat.chat.map(message => (
              <div key={message.id} className='flex flex-col flex-1 justify-end p-4'>
                <div
                  className={`p-4 rounded-lg ${
                    messageConfig[message.ownerId as keyof typeof messageConfig]
                      .color
                  } max-w-5xl ${
                    messageConfig[message.ownerId as keyof typeof messageConfig]
                      .position
                  }`}
                >
                  <span
                    className={`${
                      messageConfig[
                        message.ownerId as keyof typeof messageConfig
                      ].text
                    } break-all`}
                  >
                    {message.message}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className='flex items-center gap-4 w-full bg-card p-4 shadow-md'>
        <Smile />
        <Input
          className='w-full border-none shadow-none'
          placeholder='Digite uma mensagem'
        />
        <SendHorizonal />
      </div>
    </div>
  );
}
