import React from 'react';

import Accordion from '@/components/homeFive/Accordion';
import Features from '@/components/homeFive/Features';
import Footer from '@/components/homeFive/Footer';
import Hero from '@/components/homeFive/Hero';
import Menu from '@/components/homeFive/Menu';
import MobileMenu from '@/components/homeFive/MobileMenu';
import Pricing from '@/components/homeFive/Pricing';
import ResponsiveLayout from '@/components/homeFive/ResponsiveLayout';
import SliderCom from '@/components/homeFive/SliderCom';
import View from '@/components/homeFive/View';
import WhyUs from '@/components/homeFive/WhyUs';
import Widgets from '@/components/homeFive/Widgets';

function HomeFive() {
  return (
    <>
      <MobileMenu />
      <Menu />
      <Hero />
      <Features />
      <View />
      <Widgets />
      <WhyUs />
      <ResponsiveLayout />
      <SliderCom />
      <Accordion />
      <Pricing />
      <Footer />
    </>
  );
}

export default HomeFive;
