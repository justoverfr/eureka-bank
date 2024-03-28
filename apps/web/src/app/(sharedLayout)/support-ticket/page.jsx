import dynamic from 'next/dynamic';

import Progressbar from '@/components/chart/Progressbar';
import ContactInfo from '@/components/support/ContactInfo';
import CustomerInfo from '@/components/support/CustomerInfo';
import SupportHeader from '@/components/support/Header';
import Note from '@/components/support/Note';
import PresentAddress from '@/components/support/PresentAddress';
import RecentSupport from '@/components/support/RecentSupport';
import ShippingAddress from '@/components/support/ShippingAddress';

const SupportTicket = dynamic(
  () => import('@/components/forms/SupportTicket'),
  {
    ssr: false,
  },
);

function Support() {
  return (
    <>
      {/* Left Column */}
      <div className="col-span-8 2xl:col-span-9">
        <SupportHeader />
        <div className="dark:bg-darkblack-600 rounded-lg bg-white px-6 py-8">
          <div className="justify-between gap-12 2xl:flex">
            {/* Form  */}
            <SupportTicket />
            {/* Tabs  */}
            <RecentSupport />
          </div>
        </div>
      </div>
      {/* right Column */}
      <div className="col-span-4 w-full space-y-10 2xl:col-span-3">
        <div className="dark:bg-darkblack-600 dark:border-darkblack-400 divide-bgray-300 dark:divide-darkblack-400 divide-y rounded-lg bg-white p-8">
          {/* Customer  */}
          <CustomerInfo />
          {/* Contact Info  */}
          <ContactInfo />
          {/* Shipping Address */}
          <ShippingAddress />
          {/* Present Address  */}
          <PresentAddress />
        </div>
        {/* Note  */}
        <Note />
        {/* Progressbar  */}
        <Progressbar />
      </div>
    </>
  );
}

export default Support;
