'use client';

import ProtoTypes from 'prop-types';

function FaqTab({ title, desc, id, activeId, handleActive }) {
  const isActive = activeId?.find((item) => item === id);
  return (
    <div className="transition">
      <div
        className="accordion-header border-bgray-300 dark:border-darkblack-400 flex h-16 cursor-pointer items-center space-x-5 border-b transition"
        onClick={() => handleActive(id)}
      >
        <i className={`fas ${isActive ? 'fa-minus' : 'fa-plus'} text-success-300 text-xl`}></i>
        <h2 className="title text-bgray-900 text-sm font-bold transition-all md:text-lg dark:text-white ">
          {title}
        </h2>
      </div>
      <div
        style={{
          maxHeight: isActive ? '300px' : 0,
        }}
        className="accordion-content max-h-0 space-y-4 overflow-hidden pl-4 pt-0 lg:pl-8"
      >
        <div className="flex flex-row py-6">
          <div className="bg-success-300 flex h-[93] w-1 rounded-lg"></div>
          <div className="flex-1">
            <p className="pl-4 text-xs text-[#9AA2B1] lg:text-base lg:leading-7">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
FaqTab.propTypes = {
  title: ProtoTypes.string,
  desc: ProtoTypes.string,
  id: ProtoTypes.number,
  activeId: ProtoTypes.array,
  handleActive: ProtoTypes.func,
};
export default FaqTab;
