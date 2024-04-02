import Calender from '@/components/calender';
import ListTab from '@/components/listTab';
import LocationV2 from '@/components/location';
import Efficiency from '@/components/revenueFlow/Efficiency';
import SummaryV2 from '@/components/summary/SummaryV2';
import TaskSummary from '@/components/summary/TaskSummary';
import Wallet from '@/components/wallet';

function Statistics() {
  return (
    <>
      <section className="mb-6 2xl:mb-0 2xl:flex-1">
        <div className="mb-[24px] w-full xl:flex xl:space-x-[24px]">
          <SummaryV2 />
          <Efficiency height="h-[180px]" />
        </div>
        <div className="mb-[24px] flex w-full space-x-[24px]">
          <LocationV2 />
          <TaskSummary />
        </div>

        <ListTab />
      </section>
      <section className="flex w-full flex-col space-x-0 lg:flex-row lg:space-x-6 2xl:w-[400px] 2xl:flex-col 2xl:space-x-0">
        <Wallet />
        <Calender />
      </section>
    </>
  );
}

export default Statistics;
