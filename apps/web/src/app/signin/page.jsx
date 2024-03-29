import LeftSide from '@/components/signin';
import RightSide from '@/components/signin/RightSide';

import signinImg from '/public/static/images/illustration/signin.svg';

function SignIn() {
  return (
    <section className="dark:bg-darkblack-500 bg-white">
      <div className="flex min-h-screen flex-col justify-between lg:flex-row">
        <LeftSide />
        <RightSide img={signinImg} />
      </div>
    </section>
  );
}

export default SignIn;
