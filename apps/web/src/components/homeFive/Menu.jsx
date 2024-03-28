import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import chevronDown from '/public/static/images/icon/chevron-down.svg';
import logoBlack from '/public/static/images/logo/logoBlack.svg';

function Menu() {
  return (
    <section className="b-gray-300 fixed top-0 z-[9999] hidden w-full items-center justify-center gap-9 border-b bg-white p-6 xl:flex">
      <Link href="/">
        <div className="flex h-fit cursor-pointer gap-1.5">
          <Image
            src={logoBlack.src}
            height={logoBlack.height}
            width={logoBlack.width}
            alt="logo"
          />

          <span className="leading-extra-loose text-primary flex h-full items-center justify-center gap-3 pr-16 text-4xl font-extrabold tracking-tight">
            <span className="text-gray-900">EUREKA</span> BANK
          </span>
        </div>
      </Link>
      <div className="flex gap-11 text-2xl font-medium leading-9 text-gray-900">
        <Link href="" className="flex cursor-pointer">
          <span>Products</span>
          <Image
            src={chevronDown.src}
            height={chevronDown.height}
            width={chevronDown.width}
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
            src={chevronDown.src}
            height={chevronDown.height}
            width={chevronDown.width}
            alt="arrow down"
          />
        </Link>
        <Link href="" className="flex cursor-pointer">
          <span>Blog</span>
        </Link>
      </div>
      <Link
        href="/signin"
        className="border-primary group relative z-50 inline-flex h-[60px] shrink-0 items-center justify-center gap-3 overflow-hidden rounded-xl border-[2.333px] transition-all"
      >
        <div className="bg-primary absolute bottom-0 right-0 z-0 h-0 w-0 transition-all group-hover:h-full group-hover:w-full"></div>
        <span className="text-primary z-10 h-full w-full px-9 py-2.5 text-center text-xl font-semibold leading-8 group-hover:text-white">
          Login
        </span>
      </Link>
      <Link
        href="/signup"
        className="border-primary group relative z-40 inline-flex h-[60px] shrink-0 items-center justify-center gap-3 overflow-hidden rounded-xl border-[2.333px] transition-all"
      >
        <div className="bg-primary absolute bottom-0 right-0 z-0 h-full w-full transition-all group-hover:h-0 group-hover:w-0"></div>
        <div className="group-hover:text-primary z-10 h-full w-full px-9 py-2.5 text-center text-xl font-semibold leading-8 text-white">
          SignUp
        </div>
      </Link>
    </section>
  );
}

export default Menu;
