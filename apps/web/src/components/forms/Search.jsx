function Search() {
  return (
    <div className="bg-bgray-100 focus-within:border-success-300 dark:bg-darkblack-500 sm:w-70 lg:w-88 hidden h-full rounded-lg border border-transparent px-[18px] sm:block">
      <div className="flex h-full w-full items-center space-x-[15px]">
        <span>
          <svg
            className="stroke-bgray-900 dark:stroke-white"
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="9.80204"
              cy="10.6761"
              r="8.98856"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.0537 17.3945L19.5777 20.9094"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <label htmlFor="listSearch" className="w-full">
          <input
            type="text"
            id="listSearch"
            placeholder="Search by name, email, or others..."
            className="search-input bg-bgray-100 text-bgray-600 placeholder:text-bgray-500 dark:bg-darkblack-500 w-full border-none px-0 text-sm tracking-wide placeholder:text-sm placeholder:font-medium focus:outline-none focus:ring-0"
          />
        </label>
      </div>
    </div>
  );
}

export default Search;
