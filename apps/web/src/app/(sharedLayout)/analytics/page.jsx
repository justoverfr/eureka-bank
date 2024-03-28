import ListTab from '@/components/listTab';
import EfficiencyV2 from '@/components/revenueFlow/EfficiencyV2';
import SummaryV3 from '@/components/summary/SummaryV3';
import TeamChat from '@/components/teamChat';

function Analytics() {
  return (
    <>
      <section className="2xl:w-70 mb-6 w-full 2xl:mb-0">
        <SummaryV3 />
        <ListTab />
      </section>
      <section className="w-full 2xl:flex-1">
        <EfficiencyV2 />
        <TeamChat />
      </section>
    </>
  );
}

export default Analytics;
