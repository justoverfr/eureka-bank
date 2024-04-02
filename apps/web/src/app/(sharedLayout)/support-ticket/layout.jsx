import React from 'react';

function AnalyticsLayout({ children }) {
  return (
    <main className="dark:bg-darkblack-700 w-full px-6 pb-6 pt-[100px] sm:pt-[156px] xl:px-[48px] xl:pb-[48px]">
      <div className="flex grid-cols-12 flex-col-reverse gap-10 lg:grid">
        {children}
      </div>
    </main>
  );
}

export default AnalyticsLayout;
