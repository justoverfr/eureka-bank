import Image from 'next/image';
import Link from 'next/link';

import { getServerSession } from 'next-auth';

import { authOptions } from '@/utils/next-auth/options';

import GreenBtn from '../button/AddMony';
import PaymentFilter from '../forms/PaymentFilter';
import PaymentSelect from '../forms/PaymentSelect';
import QuickTransfer from '../forms/QuickTransfer';
import Slider from '../slider';
import member from '/public/static/images/avatar/members-3.png';
import card1 from '/public/static/images/payments/card-1.svg';
import card2 from '/public/static/images/payments/card-2.svg';
import card3 from '/public/static/images/payments/card-3.svg';

async function Wallet() {
  const session = await getServerSession(authOptions);

  return (
    <div className="dark:border-darkblack-400 dark:bg-darkblack-600 mb-6 w-full rounded-lg bg-white px-[42px] py-5 lg:mb-0 lg:w-1/2 2xl:mb-6 2xl:w-full dark:border">
      <div className="my-wallet mb-8 w-full">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-bgray-900 text-lg font-bold dark:text-white">My Wallet</h3>
          <PaymentSelect />
        </div>
        <Link href={`https://sepolia.etherscan.io/address/${session?.user.walletAddress}`}>
          <div className="text-bgray-900 break-words text-lg font-bold underline dark:text-white">
            {session && session.user.walletAddress}
          </div>
        </Link>
      </div>
      <QuickTransfer session={session} />
    </div>
  );
}

export default Wallet;
