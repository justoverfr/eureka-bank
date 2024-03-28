function PersonalInfoFrom() {
  return (
    <div className="xl:col-span-7 2xl:col-span-8">
      <h3 className="text-bgray-900 dark:border-darkblack-400 border-bgray-200 border-b pb-5 text-2xl font-bold dark:text-white">
        Personal Information's
      </h3>
      <div className="mt-8">
        <form action="">
          <div className="grid grid-cols-1 gap-6 2xl:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="fname"
                className="text-bgray-600 dark:text-bgray-50 text-base  font-medium"
              >
                First Name
              </label>
              <input
                type="text"
                className="bg-bgray-50 dark:bg-darkblack-500 focus:border-success-300 h-14 rounded-lg border-0 p-4 focus:border focus:ring-0 dark:text-white"
                name="fname"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="lname"
                className="text-bgray-600 dark:text-bgray-50 text-base  font-medium"
              >
                Last Name
              </label>
              <input
                type="text"
                className="bg-bgray-50 dark:bg-darkblack-500 focus:border-success-300 h-14 rounded-lg border-0 p-4 focus:border focus:ring-0 dark:text-white"
                name="lname"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-bgray-600 dark:text-bgray-50 text-base  font-medium"
              >
                Email
              </label>
              <input
                type="text"
                className="bg-bgray-50 dark:bg-darkblack-500 focus:border-success-300 h-14 rounded-lg border-0 p-4 focus:border focus:ring-0 dark:text-white"
                name="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-bgray-600 dark:text-bgray-50 text-base  font-medium"
              >
                Phone Number (Optional)
              </label>
              <input
                type="text"
                className="bg-bgray-50 dark:bg-darkblack-500 focus:border-success-300 h-14 rounded-lg border-0 p-4 focus:border focus:ring-0 dark:text-white"
                name="phone"
              />
            </div>
          </div>
          <h4 className="text-bgray-900 pb-6 pt-8 text-xl font-bold dark:text-white">
            Personal Address
          </h4>
          <div className="grid grid-cols-1 gap-6 2xl:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="country"
                className="text-bgray-600 dark:text-bgray-50 text-base  font-medium"
              >
                Country or Region
              </label>
              <input
                type="text"
                className="bg-bgray-50 dark:bg-darkblack-500 focus:border-success-300 h-14 rounded-lg border-0 p-4 focus:border focus:ring-0 dark:text-white"
                name="country"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="country"
                className="text-bgray-600 dark:text-bgray-50 text-base  font-medium"
              >
                City
              </label>
              <input
                type="text"
                placeholder="Washington"
                className="bg-bgray-50 dark:bg-darkblack-500 focus:border-success-300 h-14 rounded-lg border-0 p-4 focus:border focus:ring-0 dark:text-white"
                name="country"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="country"
                className="text-bgray-600 dark:text-bgray-50 text-base  font-medium "
              >
                Address
              </label>
              <input
                type="text"
                className="bg-bgray-50 dark:bg-darkblack-500 focus:border-success-300 h-14 rounded-lg border-0 p-4 focus:border focus:ring-0 dark:text-white"
                name="address"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="postcode"
                className="text-bgray-600 dark:text-bgray-50 text-base  font-medium "
              >
                Postal Code
              </label>
              <input
                type="text"
                className="bg-bgray-50 dark:bg-darkblack-500 focus:border-success-300 h-14 rounded-lg border-0 p-4 focus:border focus:ring-0 dark:text-white"
                name="postcode"
              />
            </div>
          </div>
          <h4 className="text-bgray-900 pb-6 pt-8 text-xl font-bold dark:text-white">
            Social Information
          </h4>
          <div className="grid grid-cols-1 gap-6 2xl:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="country"
                className="text-bgray-600 dark:text-bgray-50 text-base  font-medium "
              >
                Facebook
              </label>
              <input
                type="text"
                className="bg-bgray-50 dark:bg-darkblack-500 focus:border-success-300 h-14 rounded-lg border-0 p-4 focus:border focus:ring-0 dark:text-white"
                name="fbook"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="twitter"
                className="text-bgray-600 dark:text-bgray-50 text-base  font-medium "
              >
                Twitter
              </label>
              <input
                type="text"
                className="bg-bgray-50 dark:bg-darkblack-500 focus:border-success-300 h-14 rounded-lg border-0 p-4 focus:border focus:ring-0 dark:text-white"
                name="twitter"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="linkedin"
                className="text-bgray-600 dark:text-bgray-50 text-base  font-medium "
              >
                Linkedin
              </label>
              <input
                type="text"
                className="bg-bgray-50 dark:bg-darkblack-500 focus:border-success-300 h-14 rounded-lg border-0 p-4 focus:border focus:ring-0 dark:text-white"
                name="linkedin"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="youtube"
                className="text-bgray-600 dark:text-bgray-50 text-base  font-medium "
              >
                Youtube
              </label>
              <input
                type="text"
                className="bg-bgray-50 dark:bg-darkblack-500 focus:border-success-300 h-14 rounded-lg border-0 p-4 focus:border focus:ring-0 dark:text-white"
                name="youtube"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              aria-label="none"
              className="bg-success-300 mt-10 rounded-lg px-4 py-3.5 font-semibold text-white"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalInfoFrom;
