'use client';

import { useState } from 'react';

import SendMassage from '../forms/SendMassage';
import Conversion from './Conversion';
import ConversionsHeader from './ConversionsHeader';
import Profile from './Profile';
import Typing from './Typing';
import uSm1 from '/public/static/images/message/u-sm-1.png';
import uSm from '/public/static/images/message/u-sm.png';

function Conversions() {
  const [isOpen, toggleSetting] = useState(false);
  return (
    <>
      <div className="dark:bg-darkblack-500 relative col-span-12 lg:col-span-7 xl:col-span-8 2xl:col-span-9">
        <ConversionsHeader toggleSetting={() => toggleSetting(!isOpen)} />
        <div className="dark:bg-darkblack-500 mb-5 space-y-10 p-5 lg:mb-0 lg:px-11 lg:pt-20">
          <Conversion
            img={uSm}
            text="Hi! I had about question about my last transtion"
            time="09:30 AM"
          />

          <Conversion img={uSm1} text="Hi, how can I help you with?" time="10:00 pM" self={true} />
          <Conversion img={uSm} text=" HIs this possible to refund?" time="09:30 AM" />
          <Conversion
            img={uSm1}
            text=" Of course, it is available in 38 and several other sizes which are very complete"
            time="10:00 pM"
            self={true}
          />
          <Typing />
        </div>
        <SendMassage />
      </div>
      <Profile isOpen={isOpen} close={() => toggleSetting(!isOpen)} />
    </>
  );
}

export default Conversions;
