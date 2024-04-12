'use client';

import React, { useState } from 'react';

import AccordionCard from './AccordionCard';

function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState(1);

  return (
    <section className="flex w-full items-center justify-center px-[5%] py-[60px] 2xl:px-0 2xl:py-[120px]">
      <div className="w-full max-w-[1320px]">
        {/* <!-- heading  --> */}
        <div className="font-poppins leading-big-loose pb-14 text-center text-3xl font-bold text-gray-900 xl:text-5xl">
          <span>Frequently asked question</span>
        </div>

        {/* <!-- heading  --> */}

        <div className="flex flex-col gap-16 px-[5%] xl:flex-row xl:px-0">
          <div className="flex w-full flex-col gap-[30px] xl:max-w-[630px]">
            <AccordionCard
              title="Streamline Digital Transactions"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={1}
              desc="Eureka Bank streamlines digital transactions, making it simpler for you to manage your finances securely and efficiently."
            />
            <AccordionCard
              title="Decentralized Finance Accessibility"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={2}
              desc="Gain unparalleled access to decentralized finance tools and platforms with Eureka Bank, empowering your financial independence."
            />
            <AccordionCard
              title="Collaborative Financial Ecosystem"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={3}
              desc="Eureka Bank fosters a collaborative ecosystem, allowing you to connect and grow with a community of forward-thinking individuals."
            />
            <AccordionCard
              title="Intuitive Interface for All Users"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={4}
              desc="Our platform is designed for ease of use, ensuring that both beginners and experts can navigate the world of decentralized banking."
            />
            <AccordionCard
              title="Cutting-edge Blockchain Technology"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={5}
              desc="Eureka Bank leverages cutting-edge blockchain technology to provide you with secure, transparent, and fast financial services."
            />
          </div>
          <div className="flex w-full flex-col gap-[30px] xl:max-w-[630px]">
            <AccordionCard
              title="Empowering Financial Autonomy"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={6}
              desc="We empower you with financial autonomy through our innovative banking solutions and decentralized approach."
            />
            <AccordionCard
              title="Global Currency Accessibility"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={7}
              desc="Eureka Bank offers unparalleled access to a wide range of currencies, facilitating global transactions with ease."
            />
            <AccordionCard
              title="Secure Asset Management"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={8}
              desc="With Eureka Bank, your assets are managed securely using the latest in encryption and security protocols."
            />
            <AccordionCard
              title="Sustainable Banking Practices"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={9}
              desc="Our commitment to sustainability ensures that your banking practices contribute to a healthier planet."
            />
            <AccordionCard
              title="Innovative Financial Solutions"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={10}
              desc="Eureka Bank is constantly at the forefront of financial innovation, offering solutions that anticipate your future needs."
            />
            <AccordionCard
              title="24/7 Customer Support"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={11}
              desc="Our dedicated customer support team is available 24/7 to assist you with any queries or concerns you might have."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accordion;
