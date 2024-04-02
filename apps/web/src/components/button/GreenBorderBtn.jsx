'use client';

import ProtoTypes from 'prop-types';

function GreenBorderBtn({ text, action }) {
  return (
    <li onClick={action}>
      <button
        className="dark:bg-darkblack-500 dark:text-bgray-50 dark:border-success-300 text-bgray-900 rounded-lg border-2 bg-white px-4 py-3 text-sm font-semibold"
        aria-label="none"
      >
        {text}
      </button>
    </li>
  );
}
GreenBorderBtn.propTypes = {
  text: ProtoTypes.string,
  action: ProtoTypes.func,
};

export default GreenBorderBtn;
