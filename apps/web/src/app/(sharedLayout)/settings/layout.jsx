import React from 'react';

function AnalyticsLayout({ children }) {
  return (
    <main className="w-full px-6 pb-6 pt-[100px] sm:pt-[156px] xl:px-[48px] xl:pb-[48px]">
      <div className="dark:bg-darkblack-600 grid grid-cols-1 rounded-xl bg-white xl:grid-cols-12">
        {children}
      </div>
    </main>
  );
}

export default AnalyticsLayout;
