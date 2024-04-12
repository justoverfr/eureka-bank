import AddBalance from '@/components/addBalance/AddBalance';
import ListTab from '@/components/listTab';
import SummaryV3 from '@/components/summary/SummaryV3';
import Wallet from '@/components/wallet';

function MyWallet() {
  return (
    <>
      <section className="2xl:w-[424px]">
        <AddBalance />
        <Wallet />
      </section>
      <div className="2xl:flex-1">
        <section className="w-full xl:flex xl:space-x-[24px]">
          <SummaryV3 />
          {/* <EfficiencyV2 /> */}
        </section>
        <ListTab />
      </div>
    </>
  );
}

export default MyWallet;
