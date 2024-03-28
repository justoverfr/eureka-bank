'use client';

import { useState } from 'react';

import ProtoTypes from 'prop-types';

import HeaderOne from '@/components/header/HeaderOne';
import HeaderTwo from '@/components/header/HeaderTwo';
import Overlay from '@/components/overlay';
import Sidebar from '@/components/sidebar';
import SidebarV2 from '@/components/sidebar/SidebarV2';

function Layout({ bg, overlay, children }) {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className={`layout-wrapper ${sidebar && 'active'}  w-full`}>
      <div className="relative flex w-full">
        <Sidebar handleActive={() => setSidebar(!sidebar)} />
        {overlay ? overlay : <Overlay />}
        <SidebarV2 />
        <div
          className={`body-wrapper flex-1 overflow-x-hidden ${
            bg ? bg : 'dark:bg-darkblack-500'
          } `}
        >
          <HeaderOne handleSidebar={() => setSidebar(!sidebar)} />
          <HeaderTwo handleSidebar={() => setSidebar(!sidebar)} />
          {children}
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  bg: ProtoTypes.string,
  overlay: ProtoTypes.node,
  children: ProtoTypes.node,
};

export default Layout;
