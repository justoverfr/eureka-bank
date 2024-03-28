'use client';

import ProtoTypes from 'prop-types';

function WhiteBtn({ text, action }) {
  return (
    <button
      aria-label="none"
      onClick={action}
      className="dark:text-darkblack-600 rounded-lg border border-transparent bg-[#1B1D21] px-14 py-4 text-sm font-bold text-white transition duration-300 ease-in-out hover:border-[#1B1D21] hover:bg-white hover:text-[#1B1D21] dark:bg-white dark:hover:border-white dark:hover:bg-transparent dark:hover:text-white"
    >
      {text}
    </button>
  );
}

WhiteBtn.propTypes = {
  text: ProtoTypes.string,
  action: ProtoTypes.func,
};

export default WhiteBtn;
