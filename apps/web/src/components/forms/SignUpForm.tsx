'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const signupFormSchema = z
  .object({
    email: z
      .string({
        required_error: 'Email required',
      })
      .email('Invalid email'),
    password: z
      .string({
        required_error: 'Password required',
      })
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string({
      required_error: 'Please confirm your password',
    }),
    firstName: z.string().min(1, 'First Name required'),
    lastName: z.string().min(1, 'Last Name required'),
    phone: z.string().min(10),
    eula: z.boolean().refine((value) => value === true, {
      message: 'You must agree to the terms and conditions',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

const signupError = {
  users_email_unique: 'Email aready in use',
  users_phone_unique: 'Phone number already in use',
  unexpected: 'An error occurred. Please try again.',
};

function SignUpForm() {
  const [error, setError] = useState<string | null>(null);

  const form = useForm({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phone: '',
      eula: false,
    },
  });

  const router = useRouter();

  const onSubmit = (data: z.infer<typeof signupFormSchema>) => {
    console.log(data);

    const body = JSON.stringify(data);

    const signup = async () => {
      await fetch('http://localhost:3333/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      })
        .then((res) => {
          if (res.ok) {
            setError(null);
            router.push('/my-wallet');
          } else {
            // if res.message includes "users_email_unique" or "users_phone_unique"
            // set error message to signupError[res.message]
            res.json().then((data) => {
              if (data.message.includes('users_email_unique')) {
                setError(signupError.users_email_unique);
              } else if (data.message.includes('users_phone_unique')) {
                setError(signupError.users_phone_unique);
              } else {
                setError(signupError.unexpected);
              }
            });
          }
        })
        .catch((err) => {
          setError(signupError.unexpected);
        });
    };
    signup();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} action="" className="space-y-2">
        <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    type="text"
                    className="text-bgray-800 dark:bg-darkblack-500 dark:border-darkblack-400 border-bgray-300 focus:border-success-300 placeholder:text-bgray-500 h-14 w-full rounded-lg border px-4 py-3.5 text-base placeholder:text-base focus:ring-0 dark:text-white "
                    placeholder="First Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    type="text"
                    className="text-bgray-800 dark:bg-darkblack-500 dark:border-darkblack-400 border-bgray-300 focus:border-success-300 placeholder:text-bgray-500 h-14 w-full rounded-lg border px-4 py-3.5 text-base placeholder:text-base focus:ring-0 dark:text-white "
                    placeholder="Last Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  type="text"
                  className="text-bgray-800 dark:bg-darkblack-500 dark:border-darkblack-400 border-bgray-300 focus:border-success-300 placeholder:text-bgray-500 h-14 w-full rounded-lg border px-4 py-3.5 text-base placeholder:text-base focus:ring-0 dark:text-white "
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  type="password"
                  className="text-bgray-800 dark:bg-darkblack-500 dark:border-darkblack-400 border-bgray-300 focus:border-success-300 placeholder:text-bgray-500 h-14 w-full rounded-lg border px-4 py-3.5 text-base placeholder:text-base focus:ring-0 dark:text-white"
                  placeholder="Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  type="password"
                  className="text-bgray-800 dark:bg-darkblack-500 dark:border-darkblack-400 border-bgray-300 focus:border-success-300 placeholder:text-bgray-500 h-14 w-full rounded-lg border px-4 py-3.5 text-base placeholder:text-base focus:ring-0 dark:text-white"
                  placeholder="Confirm Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  type="text"
                  className="text-bgray-800 dark:bg-darkblack-500 dark:border-darkblack-400 border-bgray-300 focus:border-success-300 placeholder:text-bgray-500 h-14 w-full rounded-lg border px-4 py-3.5 text-base placeholder:text-base focus:ring-0 dark:text-white"
                  placeholder="Phone Number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mb-7 flex justify-between">
          <FormField
            control={form.control}
            name="eula"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-x-3">
                  <FormControl>
                    <input
                      type="checkbox"
                      className="border-bgray-300 focus:accent-success-300 text-success-300 dark:border-darkblack-400 h-5 w-5 rounded-md border focus:ring-transparent dark:bg-transparent"
                      checked={field.value}
                      onChange={field.onChange}
                      id="eula"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel
                      className="text-bgray-600 dark:text-bgray-50 text-base"
                      htmlFor="eula"
                    >
                      By creating an account, you agreeing to our{' '}
                      <span className="text-bgray-900 dark:text-white">Privacy Policy,</span> and{' '}
                      <span className="text-bgray-900 dark:text-white">
                        Electronics Communication Policy
                      </span>
                      .
                    </FormLabel>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <button
          className="bg-success-300 hover:bg-success-400 flex w-full items-center justify-center rounded-lg py-3.5 font-bold text-white transition-all"
          type="submit"
        >
          Sign Up
        </button>
        {error && <div className="text-center text-sm text-red-500">{error}</div>}
      </form>
    </Form>
  );
}

export default SignUpForm;
