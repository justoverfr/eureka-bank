import React from 'react';

function AnalyticsLayout({ children }) {
  return (
    <main className="pt-[108px]">
      <section className="relative grid-cols-12 lg:grid">{children}</section>
    </main>
  );
}

export default AnalyticsLayout;
