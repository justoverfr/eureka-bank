import { getServerSession } from 'next-auth';

import { authOptions } from '@/utils/next-auth/options';

import GreenBtn from '../button/AddMony';
import TransparentBtn from '../button/TransparentBtn';

async function AddBalance() {
  const session = await getServerSession(authOptions);

  const balance = await fetch(`${process.env.API_URL}/api/v1/balances?currency=erfb`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${session?.tokens.accessToken}`,
    },
  }).then((res) => res.json().then((data) => data.balance));

  return (
    <div className="dark:bg-darkblack-600 mb-[48px] w-full rounded-xl bg-white px-7 py-11">
      <div className="border-bgray-300 dark:border-darkblack-400 rounded-lg border p-8 pb-12">
        <h3 className="text-bgray-900 text-2xl font-semibold dark:text-white">Total Balance</h3>
        <h2 className="font-poppins text-bgray-900 mb-2 text-4xl font-bold dark:text-white">
          {balance} <span className="text-bgray-500 text-base font-medium uppercase">ERFB</span>
        </h2>
        <div className="flex gap-4">
          <span className="text-bgray-500 dark:text-darkblack-300 text-base font-medium">
            11 April 2022
          </span>
          <span className="flex">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 5.83325L10.8333 12.4999L7.5 9.16659L2.5 14.1666M10.8333 5.83325H17.5H10.8333ZM17.5 5.83325V12.4999V5.83325Z"
                stroke="#00C566"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-success-300 text-base font-semibold">2,05%</span>
          </span>
        </div>
      </div>
      <div className="-mt-6 flex justify-center">
        <TransparentBtn title="Withdraw All Earning" />
      </div>
      <GreenBtn text={'Add Money'} />
    </div>
  );
}

export default AddBalance;
