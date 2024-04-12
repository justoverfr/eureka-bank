'use client';

import { useState } from 'react';

import Faq from '@/components/settings/Faq';
import Notification from '@/components/settings/Notification';
import Payment from '@/components/settings/Payment';
import PersonalInfo from '@/components/settings/PersonalInfo';
import ProgramAndResources from '@/components/settings/ProgramAndResources';
import Security from '@/components/settings/Security';
import SettingsSidebar from '@/components/settings/SettingsSidebar';
import TermsAndCondition from '@/components/settings/TermsAndCondition';

function Settings() {
  const [activeTab, setActiveTab] = useState('personalInfo');
  return (
    <>
      {/* Sidebar  */}
      <SettingsSidebar activeTab={activeTab} handleActiveTab={setActiveTab} />
      {/* Tab Content  */}
      <div className="tab-content col-span-9 px-10 py-8">
        {/* Personal Information */}
        <PersonalInfo name="personalInfo" activeTab={activeTab} />
        {/* Notification  */}
        <Notification name="notification" activeTab={activeTab} />
        {/* Program & Resources  */}
        <ProgramAndResources name="programAndResources" activeTab={activeTab} />
        {/* Payments  */}
        <Payment name="payment" activeTab={activeTab} />
        {/* Faq  */}
        <Faq name="faq" activeTab={activeTab} />
        {/* Security Password  */}
        <Security name="security" activeTab={activeTab} />
        {/* Terms & Condition  */}
        <TermsAndCondition name="termsAndConditions" activeTab={activeTab} />
      </div>
    </>
  );
}

export default Settings;
