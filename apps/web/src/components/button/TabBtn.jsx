'use client';

import ProtoTypes from 'prop-types';

function TabBtn({ title, name, text, handleTabActive, activeTab, children }) {
  return (
    <div
      className={`tab flex gap-x-4 rounded-lg p-4 transition-all ${
        activeTab === name && 'active'
      }`}
      data-tab="tab1"
      onClick={() => handleTabActive(name)}
    >
      <div className="tab-icon bg-bgray-100 dark:bg-darkblack-500 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all">
        {children}
      </div>
      <div>
        <h4 className="text-bgray-900 text-base font-bold dark:text-white">
          {title}
        </h4>
        <p className="text-bgray-700 dark:text-darkblack-300 mt-0.5 text-sm font-medium">
          {text}
        </p>
      </div>
    </div>
  );
}

TabBtn.propTypes = {
  title: ProtoTypes.string,
  name: ProtoTypes.string,
  text: ProtoTypes.string,
  handleTabActive: ProtoTypes.func,
  activeTab: ProtoTypes.string,
  children: ProtoTypes.node,
};

export default TabBtn;
