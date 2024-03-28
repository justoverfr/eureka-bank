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
              title="Enhance workflow consistency"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={1}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
            <AccordionCard
              title="Build professional & performance projects"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={2}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
            <AccordionCard
              title="Work together with your team"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={3}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
            <AccordionCard
              title="Easy-to-use for both designers & developers"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={4}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
            <AccordionCard
              title="Access to modern UI components"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={5}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
          </div>
          <div className="flex w-full flex-col gap-[30px] xl:max-w-[630px]">
            <AccordionCard
              title="leveraged methods of empowerment"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={6}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
            <AccordionCard
              title=" leveraged methods of empowerment"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={7}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
            <AccordionCard
              title="leveraged methods of empowerment"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={8}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
            <AccordionCard
              title="leveraged methods of empowerment"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={9}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
            <AccordionCard
              title="leveraged methods of empowerment"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={10}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
            <AccordionCard
              title="leveraged methods of empowerment"
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
              id={11}
              desc="Bankco can help you to enhance workflow consistency. If you
                  have a large spread of stylistic preferences or if you want to
                  increase your UI work speed, Venus is the best solution."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accordion;
