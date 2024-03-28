import GreenBorderBtn from '../button/GreenBorderBtn';
import GreenBtnV2 from '../button/GreenBtnV2';
import WhiteBtn from '../button/WhiteBtn';
import RecentSupportItem from './RecentSupportItem';
import sa1 from '/public/static/images/avatar/sa-1.png';
import sa2 from '/public/static/images/avatar/sa-2.png';
import sa3 from '/public/static/images/avatar/sa-3.png';

function RecentSupport() {
  return (
    <div className="hidden 2xl:block">
      <ul className="mb-6 flex gap-4">
        <GreenBtnV2 text="Your Inbox" />
        <GreenBorderBtn text="Done" />
        <GreenBorderBtn text="Saved" />
      </ul>
      <div className="border-bgray-200 dark:border-darkblack-400 w-full rounded-lg border px-6 py-8">
        <div className="tab-panel">
          <h4 className="text-bgray-900 font-poppins mb-4 text-lg font-medium dark:text-white">
            Recent Support
          </h4>
          <RecentSupportItem
            img={sa1}
            name="Joel Becker"
            time="12h"
            question="When is the Sketch version available for download?"
            answer={`" Love this so much! What tools do you use to create your 3d illustrations ? "`}
          />
          <RecentSupportItem
            img={sa2}
            name="Joel Becker"
            time="12h"
            question="When is the Sketch version available for download?"
            answer={`" Love this so much! What tools do you use to create your 3d illustrations ? "`}
            className="bg-success-300"
          />
          <RecentSupportItem
            img={sa3}
            name="Joel Becker"
            time="12h"
            question="When is the Sketch version available for download?"
            answer={`" Love this so much! What tools do you use to create your 3d illustrations ? "`}
          />
          <div className="flex justify-center">
            <WhiteBtn text="Load More" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentSupport;
