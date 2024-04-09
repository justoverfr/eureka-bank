import Image from 'next/image';

import ProtoTypes from 'prop-types';

import PasswordChange from '../forms/PasswordChange';
import resetPass from '/public/static/images/illustration/reset-password.svg';

function Security({ name, activeTab }) {
  return (
    <div id="tab6" className={`tab-pane ${name === activeTab && 'active'}`}>
      <div className="flex flex-col gap-10 xl:flex-row xl:items-center">
        <div className="max-w-[614px] grow">
          <h3 className="text-bgray-900 mb-3 text-2xl font-bold dark:text-white">Password</h3>
          <p className="fotn-medium text-bgray-500 dark:text-bgray-50 text-sm">
            Change or view your password.
          </p>
          <PasswordChange />
        </div>
        <div className="mx-auto hidden pt-10 xl:block">
          <Image
            priority={true}
            height={resetPass.height}
            width={resetPass.width}
            src={resetPass.src}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

Security.propTypes = {
  name: ProtoTypes.string,
  activeTab: ProtoTypes.string,
};

export default Security;
