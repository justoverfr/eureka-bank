import CalenderSm from '@/components/calender';
import CalenderFull from '@/components/calender/CalenderFull';
import Wallet from '@/components/wallet';

function Calender() {
  return (
    <>
      <CalenderFull />
      <section className="flex w-full flex-col space-x-0 lg:flex-row lg:space-x-6 2xl:w-[400px] 2xl:flex-col 2xl:space-x-0">
        <Wallet />
        <CalenderSm />
      </section>
    </>
  );
}

export default Calender;
