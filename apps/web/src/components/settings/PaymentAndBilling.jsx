import Image from 'next/image';

import AddWallet from './AddWallet';
import PBCard from './PBCard';
import ael from '/public/static/images/payments/ae-l.svg';
import ae from '/public/static/images/payments/ae.svg';
import amazonWhite from '/public/static/images/payments/amazon-white.svg';
import amazon from '/public/static/images/payments/amazon.svg';
import master from '/public/static/images/payments/master.svg';
import payonerWhite from '/public/static/images/payments/payoneer-white.svg';
import payoner from '/public/static/images/payments/payoner.svg';
import paypal from '/public/static/images/payments/paypal.svg';
import visa from '/public/static/images/payments/visa.svg';

function PaymentAndBilling() {
  return (
    <div>
      <h3 className="text-bgray-900 pb-5 text-2xl font-bold dark:text-white">
        Payment and Billing
      </h3>
      <div className="grid grid-cols-1 gap-5 pb-14 sm:grid-cols-2 2xl:grid-cols-3 2xl:gap-10">
        <PBCard
          name="Credit or Debit Card"
          desc="Offers payment processing software for e-commerce websites and
            mobile applications."
        >
          <Image
            priority={true}
            height={visa.height}
            width={visa.width}
            src={visa.src}
            alt=""
          />
          <Image
            priority={true}
            height={master.height}
            width={master.width}
            src={master.src}
            alt=""
          />
          <Image
            priority={true}
            height={visa.height}
            width={visa.width}
            src={ae.src}
            alt=""
          />
        </PBCard>
        <PBCard
          name="PayPal"
          desc="Offers payment processing software for e-commerce websites and
            mobile applications."
        >
          <Image
            priority={true}
            height={paypal.height}
            width={paypal.width}
            src={paypal.src}
            alt=""
          />
        </PBCard>
        <PBCard
          name="American Express"
          desc="Offers payment processing software for e-commerce websites and
            mobile applications."
        >
          <Image
            priority={true}
            height={ael.height}
            width={ael.width}
            src={ael.src}
            alt=""
          />
        </PBCard>
        <PBCard
          name="Amazon"
          desc="Offers payment processing software for e-commerce websites and
            mobile applications."
        >
          <Image
            priority={true}
            height={amazon.height}
            width={amazon.width}
            src={amazon.src}
            className="block dark:hidden"
            alt=""
          />
          <Image
            priority={true}
            height={amazonWhite.height}
            width={amazonWhite.width}
            src={amazonWhite.src}
            className="hidden dark:block"
            alt=""
          />
        </PBCard>
        <PBCard
          name="payoner"
          desc="Offers payment processing software for e-commerce websites and
            mobile applications."
        >
          <Image
            priority={true}
            height={payoner.height}
            width={payoner.width}
            src={payoner.src}
            className="block dark:hidden"
            alt=""
          />
          <Image
            priority={true}
            height={payonerWhite.height}
            width={payonerWhite.width}
            src={payonerWhite.src}
            className="hidden dark:block"
            alt=""
          />
        </PBCard>

        <AddWallet />
      </div>
    </div>
  );
}

export default PaymentAndBilling;
