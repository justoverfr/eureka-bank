'use client';

import ProtoTypes from 'prop-types';

function GreenBtn({ text, action, className, type }) {
  return (
    <button
      onClick={() => (action ? action() : '')}
      className={`bg-success-300 hover:bg-success-400 w-full rounded-lg py-4 font-bold text-white transition-all ${
        className ? className : 'mt-14'
      }`}
      aria-label="none"
      type={type}
    >
      {text}
    </button>
  );
}

GreenBtn.propTypes = {
  text: ProtoTypes.string,
  className: ProtoTypes.string,
  action: ProtoTypes.func,
  type: ProtoTypes.string,
};

export default GreenBtn;
