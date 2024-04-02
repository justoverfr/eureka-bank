'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import chvronDown from '/public/static/images/icon//chevron-down.svg';
import barIcon from '/public/static/images/icon/bars-solid.svg';
import xmark from '/public/static/images/icon/xmark-solid.svg';
import logoBlack from '/public/static/images/logo/logoBlack.svg';

function MobileMenu() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <section className="b-gray-300 relative z-50 flex w-full items-center justify-between gap-9 border-b bg-white transition-all xl:hidden">
      <div
        className={`${
          menuActive ? 'w-full' : 'w-0'
        } overlay fixed z-30 h-[90000px] bg-black opacity-20 transition-all duration-500`}
      ></div>
      <div className="fixed top-0 z-40 flex w-full justify-between bg-white p-6">
        <Link href="/" className="flex h-fit gap-1.5">
          <Image
            src={logoBlack.src}
            height={logoBlack.height}
            width={logoBlack.width}
            alt="logo"
            className="w-5 sm:w-7 lg:w-10 xl:w-fit"
          />
          <span className="leading-extra-loose text-primary flex h-full items-center justify-center gap-3 pr-16 text-xl font-extrabold tracking-tight lg:text-4xl">
            <span className="text-gray-900">EUREKA</span> BANK
          </span>
        </Link>
        <div
          className="`flex m-menu-btn w-6 lg:w-10"
          onClick={() => setMenuActive(!menuActive)}
        >
          <Image
            src={barIcon.src}
            height={barIcon.height}
            width={barIcon.width}
            alt=""
            className={`bars ${menuActive ? 'hidden' : 'block'} transition-all`}
          />
          <Image
            src={xmark.src}
            height={xmark.height}
            width={xmark.width}
            alt=""
            className={`${
              menuActive ? 'block' : 'hidden'
            } xmark transition-all`}
          />
        </div>
      </div>

      <div
        className={`fixed top-[93px] z-40 flex h-full gap-4 rounded-br-md py-6 pl-[5%] pr-[5%] text-xl font-medium leading-9 text-gray-900 lg:text-2xl ${
          menuActive ? ' left-0' : '-left-[100%]'
        }  m-menu w-full max-w-sm flex-col bg-white transition-all duration-500`}
      >
        <Link href="" className="flex cursor-pointer">
          <span>Products</span>
          <Image
            src={chvronDown.src}
            height={chvronDown.height}
            width={chvronDown.width}
            alt="arrow down"
          />
        </Link>
        <Link href="" className="flex cursor-pointer">
          <span>Features</span>
        </Link>
        <Link href="" className="flex cursor-pointer">
          <span>Pricing</span>
        </Link>
        <Link href="" className="flex cursor-pointer">
          <span>Resources</span>
          <Image
            src={chvronDown.src}
            height={chvronDown.height}
            width={chvronDown.width}
            alt="arrow down"
          />
        </Link>
        <Link href="" className="flex cursor-pointer">
          <span>Blog</span>
        </Link>
        <div className="flex w-full justify-between">
          <Link
            href="#"
            className="border-primary group relative z-50 inline-flex shrink-0 items-center justify-center gap-3 overflow-hidden rounded-xl border-[2.333px] transition-all"
          >
            <div className="bg-primary absolute bottom-0 right-0 z-0 h-0 w-0 transition-all group-hover:h-full group-hover:w-full"></div>
            <div className="text-primary z-10 h-full w-full px-6 py-3 text-center text-xl font-semibold leading-8 group-hover:text-white">
              Login
            </div>
          </Link>
          <Link
            href="#"
            className="border-primary group relative z-40 inline-flex shrink-0 items-center justify-center gap-3 overflow-hidden rounded-xl border-[2.333px] transition-all"
          >
            <div className="bg-primary absolute bottom-0 right-0 z-0 h-full w-full transition-all group-hover:h-0 group-hover:w-0"></div>
            <span className="group-hover:text-primary z-10 h-full w-full px-6 py-3 text-center text-xl font-semibold leading-8 text-white">
              Live Preview
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MobileMenu;
