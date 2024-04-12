import AllMessageRes from '@/components/massage/AllMessageRes';
import ChatBoxLeftBar from '@/components/massage/ChatBoxLeftBar';
import Conversions from '@/components/massage/Conversions';

function Inbox() {
  return (
    <>
      <ChatBoxLeftBar />
      <AllMessageRes />
      <Conversions />
    </>
  );
}

export default Inbox;
