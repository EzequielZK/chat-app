import Conversation from './components/conversation';
import ContactList from './components/contactList';

export default function ChatView() {
  return (
    <div className='size-full flex items-stretch'>
      <ContactList />
      <Conversation />
      <div></div>
    </div>
  );
}
