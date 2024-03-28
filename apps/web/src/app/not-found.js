import Image from 'next/image';
import Link from 'next/link';

import img from '/public/static/images/illustration/404.svg';

function Error() {
  return (
    <section className="bg-notfound bg-[url('/static/images/background/404-bg.png')] bg-cover bg-no-repeat dark:bg-[url('/static/images/background/404-dark.jpg')]">
      <div className="flex min-h-screen items-center justify-center">
        <div className="mx-auto max-w-2xl">
          <Image
            priority={true}
            height={img.height}
            width={img.width}
            src={img.src}
            alt=""
          />

          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="bg-success-300 docs-creator rounded-lg px-10 py-3 text-sm font-bold text-white"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error;
