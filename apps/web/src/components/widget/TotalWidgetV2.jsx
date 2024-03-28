import TotalWIdgetCardV2 from './TotalWIdgetCardV2';
import member from '/public/static/images/avatar/members-2.png';
import earn from '/public/static/images/icons/total-earn.svg';

function TotalWidgetV2() {
  return (
    <div className="xl:w-66 w-full">
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-[24px]">
        <TotalWIdgetCardV2 logo={earn} activeMember={member} />
        <TotalWIdgetCardV2 logo={earn} activeMember={member} />
        <TotalWIdgetCardV2 logo={earn} activeMember={member} />
        <TotalWIdgetCardV2 logo={earn} activeMember={member} />
      </div>
    </div>
  );
}

export default TotalWidgetV2;
