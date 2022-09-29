import React from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 100,
  autoplay: true,
  slidesToShow: 1,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
};
const HeroCarousel = () => {
  return (
    <>
      <Slider {...settings}>
        <div>
          <img
            className="m-4 rounded-md"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1663739433318_dreamhac.jpg"
            alt="shows"
          />
        </div>
        <div>
          <img
            className="m-4 rounded-md"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1663918477360_web.jpg"
            alt="shows"
          />
        </div>
        <div>
          <img
            className="m-4 rounded-md"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1664379877519_abhishek.jpg"
            alt="image"
          />
        </div>
        <div>
          <img
            className="m-4 rounded-md"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1664281103114_bigblastweb.jpg"
            alt="shows"
          />
        </div>
        <div>
          <img
            className="m-4 rounded-md"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1663918477360_web.jpg"
            alt="shows"
          />
        </div>
      </Slider>
    </>
  );
};

export default HeroCarousel;
