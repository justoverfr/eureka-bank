'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useSession } from 'next-auth/react';
import ProtoTypes from 'prop-types';

import LogoutButton from '../logout-button';
import ResProfilePopup from './ResProfilePopup';
import profile from '/public/static/images/avatar/profile-52x52.png';
import logo from '/public/static/images/logo/logo-color.svg';
import logoW from '/public/static/images/logo/logo-white.svg';

function HeaderTwo({ handleSidebar }) {
  const [activePopup, handleActivePopup] = useState(false);

  const { data: session } = useSession();
  return (
    <div>
      <header className="mobile-wrapper fixed z-20 block w-full md:hidden">
        <div className="dark:bg-darkblack-600 flex h-[80px] w-full items-center justify-between bg-white">
          <div className="flex h-full w-full items-center space-x-5">
            <button
              aria-label="none"
              type="button"
              className="drawer-btn rotate-180 transform"
              onClick={handleSidebar}
            >
              <span>
                <svg
                  width="16"
                  height="40"
                  viewBox="0 0 16 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10C0 4.47715 4.47715 0 10 0H16V40H10C4.47715 40 0 35.5228 0 30V10Z"
                    fill="#F7F7F7"
                  />
                  <path
                    d="M10 15L6 20.0049L10 25.0098"
                    stroke="#A0AEC0"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div>
              <Link href="/">
                <Image
                  priority={true}
                  height={logo.height}
                  width={logo.width}
                  src={logo.src}
                  className="block dark:hidden"
                  alt="logo"
                />
                <Image
                  priority={true}
                  height={logoW.height}
                  width={logoW.width}
                  src={logoW.src}
                  className="hidden dark:block"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          <div className="mr-2">
            <div
              onClick={() => handleActivePopup(!activePopup)}
              className="flex cursor-pointer space-x-0 lg:space-x-3"
            >
              <div className="border-bgray-300 h-[52px] w-[52px] overflow-hidden rounded-xl border">
                <Image
                  priority={true}
                  height={profile.height}
                  width={profile.width}
                  className="object-cover"
                  src={profile.src}
                  alt="avater"
                />
              </div>
              <div className="hidden 2xl:block">
                <div className="flex items-center space-x-2.5">
                  <h3 className="text-bgray-900 text-base font-bold leading-[28px]">
                    {session?.user.firstName} {session?.user.lastName}
                  </h3>
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 10L12 14L17 10"
                        stroke="#28303F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <p className="text-bgray-600 text-sm font-medium leading-[20px]">Super Admin</p>
              </div>
            </div>

            <div className="profile-wrapper">
              <div
                onClick={() => handleActivePopup(!activePopup)}
                className="profile-outside fixed -left-[43px] top-0 hidden h-full w-full"
              ></div>
              <div
                style={{
                  filter: `drop-shadow(12px 12px 40px rgba(0, 0, 0, 0.08))`,
                }}
                className="profile-box absolute right-0 top-[81px] hidden w-[300px] overflow-hidden rounded-lg bg-white"
              >
                <div className="relative w-full px-3 py-2">
                  <div>
                    <ul>
                      <li className="w-full">
                        <Link href="/settings">
                          <div className="text-bgray-600 hover:bg-bgray-100 hover:text-bgray-900 flex items-center space-x-[18px] rounded-lg p-[14px]">
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
                                    d="M12.1197 12.7805C12.0497 12.7705 11.9597 12.7705 11.8797 12.7805C10.1197 12.7205 8.71973 11.2805 8.71973 9.51047C8.71973 7.70047 10.1797 6.23047 11.9997 6.23047C13.8097 6.23047 15.2797 7.70047 15.2797 9.51047C15.2697 11.2805 13.8797 12.7205 12.1197 12.7805Z"
                                    stroke="#111827"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M18.7398 19.3796C16.9598 21.0096 14.5998 21.9996 11.9998 21.9996C9.39977 21.9996 7.03977 21.0096 5.25977 19.3796C5.35977 18.4396 5.95977 17.5196 7.02977 16.7996C9.76977 14.9796 14.2498 14.9796 16.9698 16.7996C18.0398 17.5196 18.6398 18.4396 18.7398 19.3796Z"
                                    stroke="#111827"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                    stroke="#111827"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="flex-1">
                              <span className="text-sm font-semibold">My Profile</span>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="w-full">
                        <Link href="/messages">
                          <div className="text-bgray-600 hover:bg-bgray-100 hover:text-bgray-900 flex items-center space-x-[18px] rounded-lg p-[14px]">
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
                                    d="M2 12V7C2 4.79086 3.79086 3 6 3H18C20.2091 3 22 4.79086 22 7V17C22 19.2091 20.2091 21 18 21H8M6 8L9.7812 10.5208C11.1248 11.4165 12.8752 11.4165 14.2188 10.5208L18 8M2 15H8M2 18H8"
                                    stroke="#2A313C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="flex-1">
                              <span className="text-sm font-semibold">Inbox</span>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="w-full">
                        <LogoutButton />
                      </li>
                    </ul>
                  </div>
                  <div className="bg-bgray-300 my-[14px] h-[1px] w-full"></div>
                  <div>
                    <ul>
                      <li className="w-full">
                        <Link href="/settings">
                          <div className="text-bgray-600 hover:bg-bgray-100 hover:text-bgray-900 rounded-lg p-[14px]">
                            <span className="text-sm font-semibold">Settings</span>
                          </div>
                        </Link>
                      </li>
                      <li className="w-full">
                        <Link href="/users">
                          <div className="text-bgray-600 hover:bg-bgray-100 hover:text-bgray-900 rounded-lg p-[14px]">
                            <span className="text-sm font-semibold">Users</span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <ResProfilePopup isActive={activePopup} />
    </div>
  );
}

HeaderTwo.propTypes = {
  handleSidebar: ProtoTypes.func,
};

export default HeaderTwo;
