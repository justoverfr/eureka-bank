'use client';

import { useRouter } from 'next/navigation';

import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    signOut();
    router.push('/');
  };

  return (
    <button className="text-success-300 flex items-center space-x-[18px] rounded-lg p-[14px]">
      <div className="w-[20px]">
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 10L13.7071 11.2929C13.3166 11.6834 13.3166 12.3166 13.7071 12.7071L15 14M14 12L22 12M6 20C3.79086 20 2 18.2091 2 16V8C2 5.79086 3.79086 4 6 4M6 20C8.20914 20 10 18.2091 10 16V8C10 5.79086 8.20914 4 6 4M6 20H14C16.2091 20 18 18.2091 18 16M6 4H14C16.2091 4 18 5.79086 18 8"
              stroke="#22C55E"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
      <div className="flex-1">
        <span className="text-sm font-semibold">Log Out</span>
      </div>
    </button>
  );
}
