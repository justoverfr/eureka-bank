'use client';

import Image from 'next/image';
import Link from 'next/link';

import ProtoTypes from 'prop-types';

import logoColor from '/public/static/images/logo/logo-color.svg';
import logoWhite from '/public/static/images/logo/logo-white.svg';

export const CrossBtn = ({ close }) => {
  return (
    <div className="absolute right-0 top-0 pr-5 pt-5">
      <button
        aria-label="none"
        type="button"
        onClick={close}
        id="step-1-cancel"
        className="dark:bg-darkblack-500 rounded-md bg-white focus:outline-none"
      >
        <span className="sr-only">Close</span>
        {/* Cross Icon  */}
        <svg
          className="stroke-darkblack-300"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 6L18 18M6 18L18 6L6 18Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export const HeadingLogo = () => {
  return (
    <Link href="/signin" className="mb-7 block">
      <Image
        priority={true}
        height={logoColor.height}
        width={logoColor.width}
        src={logoColor.src}
        className="block dark:hidden"
        alt=""
      />
      <Image
        priority={true}
        height={logoWhite.height}
        width={logoWhite.width}
        src={logoWhite.src}
        className="hidden dark:block"
        alt=""
      />
    </Link>
  );
};

export const ResetPass = ({ close, handelModalData }) => {
  return (
    <div className="step-content step-1">
      {/* My Content  */}
      <div className="dark:bg-darkblack-600 relative max-w-[492px] transform overflow-hidden rounded-lg bg-white p-8 text-left transition-all">
        <CrossBtn close={close} />
        <div>
          <HeadingLogo />
          <h3 className="text-bgray-900 mb-3 text-2xl font-bold dark:text-white">
            Reset your password
          </h3>
          <p className="text-bgray-600 dark:text-darkblack-300 mb-7 text-base font-medium">
            Enter the email address associated with your account and we'll send
            you a link to reset your password.
          </p>
          <form action="">
            <div className="mb-8">
              <input
                type="text"
                className="dark:bg-darkblack-500 focus:border-success-300 h-14 w-full rounded-lg border-0 bg-[#F5F5F5] p-4 text-base placeholder:font-medium focus:border focus:ring-0 dark:text-white"
                placeholder="Email"
              />
            </div>
            <Link
              href="/signin"
              className="text-success-300 mb-8 block text-sm font-bold underline"
            >
              Return to login
            </Link>
            <button
              aria-label="none"
              type="button"
              onClick={() => handelModalData('verify')}
              id="step-1-next"
              className="bg-success-300 hover:bg-success-400 flex w-full justify-center rounded-lg py-4 text-base font-medium text-white transition-all"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const CodeVerify = ({ close, handelModalData }) => {
  return (
    <div className="step-content step-2 ">
      <div className="dark:bg-darkblack-600 relative max-w-lg transform overflow-hidden rounded-lg bg-white p-8 text-left transition-all">
        <CrossBtn close={close} />
        <div>
          <HeadingLogo />
          <h3 className="text-bgray-900 mb-3 text-2xl font-bold dark:text-white">
            Enter verification code
          </h3>
          <p className="text-bgray-600 dark:text-darkblack-300 mb-7 text-base font-medium">
            We have just sent a verification code to ajoy*****@mail.com
          </p>
          <form>
            <div className="mb-8 flex space-x-6">
              <input
                type="text"
                className="focus:border-success-300 text-bgray-900 dark:bg-darkblack-500 h-14 w-14 rounded-xl border border-transparent bg-[#F5F5F5] px-5 py-3 text-2xl font-bold focus:border focus:ring-0 dark:text-white"
                placeholder=""
              />
              <input
                type="text"
                className="focus:border-success-300 text-bgray-900 dark:bg-darkblack-500 h-14 w-14 rounded-xl border border-transparent bg-[#F5F5F5] px-5 py-3 text-2xl font-bold focus:border focus:ring-0 dark:text-white"
                placeholder=""
              />
              <input
                type="text"
                className="focus:border-success-300 text-bgray-900 dark:bg-darkblack-500 h-14 w-14 rounded-xl border border-transparent bg-[#F5F5F5] px-5 py-3 text-2xl font-bold focus:border focus:ring-0 dark:text-white"
                placeholder=""
              />
              <input
                type="text"
                className="focus:border-success-300 text-bgray-900 dark:bg-darkblack-500 h-14 w-14 rounded-xl border border-transparent bg-[#F5F5F5] px-5 py-3 text-2xl font-bold focus:border focus:ring-0 dark:text-white"
                placeholder=""
              />
              <input
                type="text"
                className="focus:border-success-300 text-bgray-900 dark:bg-darkblack-500 h-14 w-14 rounded-xl border border-transparent bg-[#F5F5F5] px-5 py-3 text-2xl font-bold focus:border focus:ring-0 dark:text-white"
                placeholder=""
              />
            </div>
            <button
              aria-label="none"
              className="text-success-300 mb-8 block text-sm font-bold"
            >
              Send the code again
            </button>
            <button
              aria-label="none"
              type="button"
              onClick={() => handelModalData('newPass')}
              id="step-2-next"
              className="bg-success-300 flex w-full justify-center rounded-lg py-4 text-base font-medium text-white transition-all"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const NewPass = ({ close, handelModalData }) => {
  return (
    <div className="step-content step-3">
      {/* Step 3 Content Here */}
      <div className="dark:bg-darkblack-600  relative transform overflow-hidden rounded-lg bg-white p-8 text-left transition-all">
        <CrossBtn close={close} />
        <div>
          <HeadingLogo />
          <h3 className="text-bgray-900 mb-3 text-2xl font-bold dark:text-white">
            Create new password
          </h3>
          <p className="text-bgray-600 dark:text-darkblack-300 mb-7 text-base font-medium">
            Please enter a new password. Your new password must be different
            from previous password.
          </p>
          <form action="">
            <div className="relative mb-6">
              <input
                type="text"
                className="text-bgray-800 border-bgray-300 focus:border-success-300 placeholder:text-bgray-500 dark:bg-darkblack-500 h-14
          w-full rounded-lg border px-4 py-3.5 text-base placeholder:text-base focus:border focus:ring-0 dark:border-0 dark:text-white"
                placeholder="Password"
              />
              <button
                aria-label="none"
                className="absolute bottom-4 right-4 top-4"
              >
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 1L20 19"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.58445 8.58704C9.20917 8.96205 8.99823 9.47079 8.99805 10.0013C8.99786 10.5319 9.20844 11.0408 9.58345 11.416C9.95847 11.7913 10.4672 12.0023 10.9977 12.0024C11.5283 12.0026 12.0372 11.7921 12.4125 11.417"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.363 3.36506C9.22042 3.11978 10.1082 2.9969 11 3.00006C15 3.00006 18.333 5.33306 21 10.0001C20.222 11.3611 19.388 12.5241 18.497 13.4881M16.357 15.3491C14.726 16.4491 12.942 17.0001 11 17.0001C7 17.0001 3.667 14.6671 1 10.0001C2.369 7.60506 3.913 5.82506 5.632 4.65906"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="relative mb-8">
              <input
                type="text"
                className="text-bgray-800 border-bgray-300 focus:border-success-300 placeholder:text-bgray-500 dark:bg-darkblack-500 h-14 w-full rounded-lg border px-4 py-3.5 text-base placeholder:text-base focus:ring-0 dark:border-0"
                placeholder="Confirm new Password"
              />
              <button
                aria-label="none"
                className="absolute bottom-4 right-4 top-4"
              >
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 1L20 19"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.58445 8.58704C9.20917 8.96205 8.99823 9.47079 8.99805 10.0013C8.99786 10.5319 9.20844 11.0408 9.58345 11.416C9.95847 11.7913 10.4672 12.0023 10.9977 12.0024C11.5283 12.0026 12.0372 11.7921 12.4125 11.417"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.363 3.36506C9.22042 3.11978 10.1082 2.9969 11 3.00006C15 3.00006 18.333 5.33306 21 10.0001C20.222 11.3611 19.388 12.5241 18.497 13.4881M16.357 15.3491C14.726 16.4491 12.942 17.0001 11 17.0001C7 17.0001 3.667 14.6671 1 10.0001C2.369 7.60506 3.913 5.82506 5.632 4.65906"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <button
              aria-label="none"
              type="button"
              onClick={() => handelModalData('success')}
              id="step-2-next"
              className="bg-success-300 hover:bg-success-400 flex w-full justify-center rounded-lg py-4 text-base font-medium text-white transition-all"
            >
              Confirm Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const SuccessFull = ({ close }) => {
  return (
    <div className="step-content step-4">
      <div className="dark:bg-darkblack-600  relative transform overflow-hidden rounded-lg bg-white p-8 text-left transition-all">
        <CrossBtn close={close} />
        <div className="mt-4 text-center">
          <h3 className="text-bgray-900 mb-3 text-2xl font-bold dark:text-white">
            Your successfully changed your password
          </h3>
          <p className="text-bgray-600 dark:text-darkblack-300 mb-7 text-base font-medium">
            Commodo gravida eget ultricies sed in lacus. Commodo, tellus duis
            eros pellentesque.
          </p>
          <Link
            href="/signin"
            onClick={close}
            id="step-4-cancel"
            className="bg-success-300 hover:bg-success-400 flex w-full justify-center rounded-lg py-4 text-base font-semibold text-white transition-all"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

function PasswordResetModal({
  isActive,
  modalData,
  handelModalData,
  handleActive,
}) {
  return (
    <div
      className={`modal fixed inset-0 z-50 flex items-center justify-center overflow-y-auto ${
        isActive ? '' : 'hidden'
      }`}
      id="multi-step-modal"
    >
      <div className="modal-overlay dark:bg-bgray-900 absolute inset-0 bg-gray-500 opacity-75 dark:opacity-50"></div>
      <div className="modal-content mx-auto w-full max-w-lg px-4">
        {modalData === 'verify' ? (
          <CodeVerify
            close={() => handleActive(false)}
            handelModalData={handelModalData}
          />
        ) : modalData === 'newPass' ? (
          <NewPass
            close={() => handleActive(false)}
            handelModalData={handelModalData}
          />
        ) : modalData === 'success' ? (
          <SuccessFull close={() => handleActive(false)} />
        ) : (
          <ResetPass
            close={() => handleActive(false)}
            handelModalData={handelModalData}
          />
        )}
      </div>
    </div>
  );
}

PasswordResetModal.propTypes = {
  isActive: ProtoTypes.bool,
  modalData: ProtoTypes.string,
  handelModalData: ProtoTypes.func,
  handleActive: ProtoTypes.func,
};
CrossBtn.propTypes = {
  close: ProtoTypes.func,
};
ResetPass.propTypes = {
  close: ProtoTypes.func,
  handelModalData: ProtoTypes.func,
};
CodeVerify.propTypes = {
  close: ProtoTypes.func,
  handelModalData: ProtoTypes.func,
};
NewPass.propTypes = {
  close: ProtoTypes.func,
  handelModalData: ProtoTypes.func,
};
SuccessFull.propTypes = {
  close: ProtoTypes.func,
};

export default PasswordResetModal;
