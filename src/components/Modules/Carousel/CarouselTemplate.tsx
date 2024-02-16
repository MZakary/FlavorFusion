import React, { useState } from 'react';
import Slider from 'react-slick';

interface CarouselItem {
  image: string;
  title: string;
  url: string;
}



function Carousel({items, title}) {
    if (!Array.isArray(items) || items.length <= 0) {
        return null;
      }
    
      const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
        const { className, onClick } = props;
    
        return (
          <div {...props} className="custom-prevArrow" onClick={onClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            </svg>
          </div>
        );
      };
      const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
        const { className, onClick } = props;
    
        return (
          <div {...props} className="custom-nextArrow" onClick={onClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
            </svg>
          </div>
        );
      };
    
      const settings = {
        className: 'center',
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        centerPadding: '100px',
        slidesToShow: 3,
        speed: 500,
        nextArrow: <GalleryNextArrow currentSlide={undefined} slideCount={items.length}/>,
        prevArrow: <GalleryPrevArrow currentSlide={undefined} slideCount={items.length}/>
      };
    
      return (
        <>
            <h1 className='SliderTitle'>{title}</h1>
            <Slider {...settings}>
              {items.map((slide, index) => {
                  return (
                  <div key={index}>
                      <img src={slide.image} alt="slider" key={index} className="image" />
                      <span className='sliderText'>{slide.name}</span>
                  </div>
                  );
              })}
            </Slider>
        </>
      );
};

export default Carousel;
