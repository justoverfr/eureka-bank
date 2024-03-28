function PasswordChange() {
  return (
    <form action="" className="mt-6">
      <div className="relative mb-6 flex flex-col">
        <label
          htmlFor="old"
          className="text-bgray-500 dark:text-darkblack-300 mb-3 block text-sm font-medium"
        >
          Old password
        </label>
        <input
          type="text"
          className="bg-bgray-50 dark:bg-darkblack-500 focus:border-success-300 h-14 w-full rounded-lg border-0 px-4 py-5 focus:border focus:ring-0 dark:text-white"
        />
        <button aria-label="none" className="absolute right-4 top-12">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3L21 21"
              stroke="#718096"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.584 10.5869C10.2087 10.9619 9.99775 11.4707 9.99756 12.0012C9.99737 12.5317 10.2079 13.0406 10.583 13.4159C10.958 13.7912 11.4667 14.0021 11.9973 14.0023C12.5278 14.0025 13.0367 13.7919 13.412 13.4169"
              stroke="#718096"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.363 5.36506C10.2204 5.11978 11.1082 4.9969 12 5.00006C16 5.00006 19.333 7.33306 22 12.0001C21.222 13.3611 20.388 14.5241 19.497 15.4881M17.357 17.3491C15.726 18.4491 13.942 19.0001 12 19.0001C8 19.0001 4.667 16.6671 2 12.0001C3.369 9.60506 4.913 7.82506 6.632 6.65906"
              stroke="#718096"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="relative mb-6 flex flex-col">
        <label
          htmlFor="old"
          className="text-bgray-500 dark:text-darkblack-300 mb-3 block text-sm font-medium"
        >
          New password
        </label>
        <input
          type="text"
          className="bg-bgray-50 dark:bg-darkblack-500 focus:border-success-300 h-14 w-full rounded-lg border-0 px-4 py-5 focus:border focus:ring-0"
        />
        <button aria-label="none" className="absolute right-4 top-12">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3L21 21"
              stroke="#718096"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.584 10.5869C10.2087 10.9619 9.99775 11.4707 9.99756 12.0012C9.99737 12.5317 10.2079 13.0406 10.583 13.4159C10.958 13.7912 11.4667 14.0021 11.9973 14.0023C12.5278 14.0025 13.0367 13.7919 13.412 13.4169"
              stroke="#718096"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.363 5.36506C10.2204 5.11978 11.1082 4.9969 12 5.00006C16 5.00006 19.333 7.33306 22 12.0001C21.222 13.3611 20.388 14.5241 19.497 15.4881M17.357 17.3491C15.726 18.4491 13.942 19.0001 12 19.0001C8 19.0001 4.667 16.6671 2 12.0001C3.369 9.60506 4.913 7.82506 6.632 6.65906"
              stroke="#718096"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <small className="text-bgray-500 dark:text-darkblack-300 mt-1 block text-xs">
          Minimum 6 characters
        </small>
      </div>
      <div className="flex justify-end">
        <button
          aria-label="none"
          className="bg-success-300 hover:bg-success-400 rounded-lg px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-opacity-100"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

export default PasswordChange;
