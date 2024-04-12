'use client';

import { useState } from 'react';

import Quill from './Quill';

function SupportTicket() {
  const [text, setText] = useState({ text: '' });
  const toolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
  ];

  const handleChange = (value) => {
    setText({ text: value });
  };
  return (
    <form action="">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="fn"
            className="text-basse dark:text-bgray-50 text-bgray-600 mb-2 block font-medium"
          >
            First Name
          </label>
          <input
            type="text"
            className="bg-bgray-50 dark:bg-darkblack-500 focus:border-success-300 w-full rounded-lg border-0 p-4 focus:border focus:ring-0 dark:text-white"
          />
        </div>
        <div>
          <label
            htmlFor="ln"
            className="text-basse dark:text-bgray-50 text-bgray-600 mb-2 block font-medium"
          >
            Last Name
          </label>
          <input
            type="text"
            className="bg-bgray-50 dark:bg-darkblack-500 focus:border-success-300 w-full rounded-lg border-0 p-4 focus:border focus:ring-0 dark:text-white"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-basse dark:text-bgray-50 text-bgray-600 mb-2 block font-medium"
          >
            Email
          </label>
          <input
            type="text"
            className="bg-bgray-50 dark:bg-darkblack-500 focus:border-success-300 w-full rounded-lg border-0 p-4 focus:border focus:ring-0 dark:text-white"
          />
        </div>
        <div>
          <label
            htmlFor="fn"
            className="text-basse dark:text-bgray-50 text-bgray-600 mb-2 block font-medium"
          >
            Phone Number(Optional)
          </label>
          <input
            type="text"
            className="bg-bgray-50 dark:bg-darkblack-500 focus:border-success-300 w-full rounded-lg border-0 p-4 focus:border focus:ring-0 dark:text-white"
          />
        </div>
      </div>
      <div className="mb-6 mt-10">
        <h4 className="text-bgray-900 mb-4 text-lg font-bold dark:text-white">Support issues</h4>
        <label htmlFor="" className="mb-2 block text-base font-semibold dark:text-white">
          Title
        </label>
        <input
          type="text"
          className="bg-bgray-50 dark:bg-darkblack-500 focus:border-success-300 w-full rounded-lg border-0 p-4 focus:border focus:ring-0 dark:text-white"
        />
      </div>
      <div className="custom-quill mb-6 mt-10">
        <label htmlFor="" className="mb-2 block text-base font-semibold dark:text-white">
          Description
        </label>
        <Quill
          value={text.text}
          onChange={handleChange}
          modules={{
            toolbar: toolbarOptions,
          }}
          className=" react-quill-1 relative w-full"
        />
      </div>
      <div className="flex justify-end">
        <button
          aria-label="none"
          className="bg-success-300 hover:bg-success-400 rounded-lg px-12 py-3.5 font-semibold text-white transition-all"
        >
          Submit Ticket
        </button>
      </div>
    </form>
  );
}

export default SupportTicket;
