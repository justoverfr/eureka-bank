'use client';

import ProtoTypes from 'prop-types';

function TransparentBtn({ title, action }) {
  return (
    <button
      aria-label="none"
      onClick={() => (action ? action() : '')}
      className="border-bgray-500 text-bgray-600 dark:bg-darkblack-600 rounded-lg border bg-white px-6 py-3 text-sm font-medium dark:text-white"
    >
      {title}
    </button>
  );
}

TransparentBtn.propTypes = {
  title: ProtoTypes.string,
  action: ProtoTypes.func,
};

export default TransparentBtn;
