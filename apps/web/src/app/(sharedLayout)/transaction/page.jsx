import ListTab from '@/components/listTab';
import TeamChat from '@/components/teamChat';
import Wallet from '@/components/wallet';

function Transaction() {
  return (
    <>
      <section className="2xl:w-70 mb-6 w-full 2xl:mb-0">
        <ListTab pageSize={9} />
      </section>
      <section className="w-full 2xl:flex-1">
        <Wallet />
        <TeamChat />
      </section>
    </>
  );
}

export default Transaction;
