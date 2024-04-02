'use client';

import { useState } from 'react';

import SlideBtn from '../button/SlideBtn';

function PRSettings() {
  const [activeSharing, setActiveSharing] = useState({
    ['Backup']: false,
    ['Sync']: true,
    ['File Sharing']: false,
  });
  const handleNotification = (name) => {
    setActiveSharing({
      ...activeSharing,
      [name]: !activeSharing[name],
    });
  };
  return (
    <div className="border-bgray-300 mt-8 border-t pt-7">
      <h3 className="text-bgray-900 mb-4 text-base font-semibold uppercase dark:text-white">
        Settings
      </h3>
      <div className="flex flex-col space-y-5">
        <SlideBtn
          name="File Sharing"
          handleBtn={handleNotification}
          status={activeSharing}
        />
        <SlideBtn
          name="Backup"
          handleBtn={handleNotification}
          status={activeSharing}
        />
        <SlideBtn
          name="Sync"
          handleBtn={handleNotification}
          status={activeSharing}
        />
      </div>
    </div>
  );
}

export default PRSettings;
