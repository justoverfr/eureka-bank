function AddFolders() {
  return (
    <div className="border-bgray-300 dark:border-darkblack-400 flex h-24 w-24 flex-col items-center justify-center rounded-lg border-2 border-dashed md:h-32 md:w-32 lg:h-44 lg:w-44">
      <button aria-label="none" className="flex flex-col items-center">
        <span className="dark:bg-darkblack-500 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#F8F8F8]">
          <svg
            className="fill-bgray-900 dark:fill-white"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.79995 4.0002C8.79995 3.55837 8.44178 3.2002 7.99995 3.2002C7.55812 3.2002 7.19995 3.55837 7.19995 4.0002V7.2002H3.99995C3.55812 7.2002 3.19995 7.55837 3.19995 8.0002C3.19995 8.44202 3.55812 8.8002 3.99995 8.8002H7.19995V12.0002C7.19995 12.442 7.55812 12.8002 7.99995 12.8002C8.44178 12.8002 8.79995 12.442 8.79995 12.0002V8.8002H12C12.4418 8.8002 12.8 8.44202 12.8 8.0002C12.8 7.55837 12.4418 7.2002 12 7.2002H8.79995V4.0002Z"
            />
          </svg>
        </span>
        <span className="text-bgray-500 mt-4 block text-base font-medium">Add Folder</span>
      </button>
    </div>
  );
}

export default AddFolders;
