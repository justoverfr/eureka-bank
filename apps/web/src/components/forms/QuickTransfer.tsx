'use client';

import Image from 'next/image';
import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';

import GreenBtn from '@/components/button/AddMony';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

import PaymentFilter from './PaymentFilter';
import member from '/public/static/images/avatar/members-3.png';

const quickTransferFormSchema = z.object({
  receiverWalletAddress: z.string({
    required_error: 'Receiver wallet address is required',
  }),
  amount: z.coerce.number().positive('Amount must be a positive number'),
});

export default function QuickTransfer({ session }: { session: Session }) {
  const form = useForm({
    resolver: zodResolver(quickTransferFormSchema),
    defaultValues: {
      receiverWalletAddress: '',
      amount: 0,
    },
  });

  const onSubmit = async (data: z.infer<typeof quickTransferFormSchema>) => {
    fetch(`http://localhost:3333/api/v1/transactions/${data.receiverWalletAddress}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.tokens.accessToken}`,
      },
      body: JSON.stringify({
        currency: 'erfb',
        amount: data.amount,
      }),
    }).then((res) => {
      if (res.ok) {
        toast.success(
          <div>
            <p>Transaction successful</p>
            {res.json().then((data) => {
              return (
                <p>
                  Transaction hash:{' '}
                  <Link
                    href={`https://sepolia.etherscan.io/tx/${data.address}`}
                    className="text-blue-500 dark:text-blue-400"
                  >
                    {data.address}
                  </Link>
                </p>
              );
            })}
          </div>,
        );
      } else {
        toast.error(<p>Transaction failed</p>);
      }
    });
  };

  return (
    <div className="w-full">
      <h3 className="text-bgray-900 mb-4 text-lg font-bold dark:text-white">Quick Transfer</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} action="">
          <PaymentFilter />
          {/* <div className="border-bgray-200 focus-within:border-success-300 dark:border-darkblack-400 flex h-[98px] w-full flex-col justify-between rounded-lg border p-4">
        <p className="text-bgray-600 dark:text-bgray-50 text-sm font-medium">
          Enter recipient's wallet address
        </p>
        <div className="flex h-[35px] w-full items-center justify-between">
          <label className="w-full">
            <input
              type="text"
              className="text-bgray-900 dark:border-darkblack-400 dark:bg-darkblack-600 w-full border-none p-0 text-2xl font-bold focus:outline-none focus:ring-0 dark:text-white"
            />
          </label>
          <div>
            <Image
              priority={true}
              height={member.height}
              width={member.width}
              src={member.src}
              alt="members"
            />
          </div>
        </div>
      </div> */}
          <FormField
            control={form.control}
            name="receiverWalletAddress"
            render={({ field }) => (
              <FormItem>
                <div className="border-bgray-200 focus-within:border-success-300 dark:border-darkblack-400 flex h-[98px] w-full flex-col justify-between rounded-lg border p-4">
                  <p className="text-bgray-600 dark:text-bgray-50 text-sm font-medium">
                    Enter recipient's wallet address
                  </p>
                  <div className="flex h-[35px] w-full items-center justify-between">
                    <label className="w-full">
                      <FormControl>
                        <input
                          type="text"
                          className="text-bgray-900 dark:border-darkblack-400 dark:bg-darkblack-600 w-full border-none p-0 text-2xl font-bold focus:outline-none focus:ring-0 dark:text-white"
                          {...field}
                        />
                      </FormControl>
                    </label>
                    <div>
                      <Image
                        priority={true}
                        height={member.height}
                        width={member.width}
                        src={member.src}
                        alt="members"
                      />
                    </div>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <br />
          {/* <div className="border-bgray-200 focus-within:border-success-300 dark:border-darkblack-400 flex h-[98px] w-full flex-col justify-between rounded-lg border p-4">
            <p className="text-bgray-600 dark:text-bgray-50 text-sm font-medium">Enter amount</p>
            <div className="flex h-[35px] w-full items-center justify-between">
              <span className="text-bgray-900 font-bold dark:text-white">ERFB </span>
              <label className="w-full">
                <input
                  type="text"
                  className="text-bgray-900 dark:border-darkblack-400 dark:bg-darkblack-600 w-full border-none p-0 text-2xl font-bold focus:outline-none focus:ring-0 dark:text-white"
                />
              </label>
              <div>
                <Image
                  priority={true}
                  height={member.height}
                  width={member.width}
                  src={member.src}
                  alt="members"
                />
              </div>
            </div>
          </div> */}
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <div className="border-bgray-200 focus-within:border-success-300 dark:border-darkblack-400 flex h-[98px] w-full flex-col justify-between rounded-lg border p-4">
                  <p className="text-bgray-600 dark:text-bgray-50 text-sm font-medium">
                    Enter amount
                  </p>
                  <div className="flex h-[35px] w-full items-center justify-between">
                    <span className="text-bgray-900 font-bold dark:text-white">ERFB </span>
                    <label className="w-full">
                      <FormControl>
                        <input
                          type="text"
                          className="text-bgray-900 dark:border-darkblack-400 dark:bg-darkblack-600 w-full border-none p-0 text-2xl font-bold focus:outline-none focus:ring-0 dark:text-white"
                          {...field}
                        />
                      </FormControl>
                    </label>
                    <div>
                      <Image
                        priority={true}
                        height={member.height}
                        width={member.width}
                        src={member.src}
                        alt="members"
                      />
                    </div>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <GreenBtn type="submit" text="Send Money" className="mt-7" />
        </form>
      </Form>
    </div>
  );
}
