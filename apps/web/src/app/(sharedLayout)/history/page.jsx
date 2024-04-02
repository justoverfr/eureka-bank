import HistoryTable from '@/components/listTab/HistoryTable';
import TeamChat from '@/components/teamChat';
import Wallet from '@/components/wallet';

function History() {
  return (
    <>
      <section className="mb-6 2xl:mb-0 2xl:flex-1">
        <HistoryTable />
      </section>
      <section className="flex w-full flex-col space-x-0 lg:flex-row lg:space-x-6 2xl:w-[400px] 2xl:flex-col 2xl:space-x-0">
        <Wallet />
        <TeamChat />
      </section>
    </>
  );
}

export default History;
