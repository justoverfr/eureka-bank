import React from 'react';

function AnalyticsLayout({ children }) {
  return (
    <main className="w-full px-6 pb-6 pt-[100px] sm:pt-[156px] xl:px-[48px] xl:pb-[48px]">
      <div className="grid gap-3 lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 xl:gap-6 2xl:grid-cols-4">
        {children}
      </div>
    </main>
  );
}

export default AnalyticsLayout;
