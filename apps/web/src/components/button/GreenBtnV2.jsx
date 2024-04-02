'use client';

import ProtoTypes from 'prop-types';

function GreenBtnV2({ text, action }) {
  return (
    <li onClick={action}>
      <button
        aria-label="none"
        className="bg-success-300 dark:bg-success-300 dark:text-bgray-900 rounded-lg border-2 border-transparent px-4 py-3 text-sm font-semibold text-white"
      >
        {text}
      </button>
    </li>
  );
}

GreenBtnV2.propTypes = {
  text: ProtoTypes.string,
  action: ProtoTypes.func,
};

export default GreenBtnV2;
