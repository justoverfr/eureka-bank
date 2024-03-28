'use client';

import ProtoTypes from 'prop-types';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Slider({ children, ...props }) {
  return (
    <Swiper {...props} modules={[Autoplay, Pagination, Navigation, EffectFade]}>
      {children.map((child, index) => (
        <SwiperSlide key={index + 'swiper'}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}

Slider.propTypes = {
  children: ProtoTypes.node,
};

export default Slider;
