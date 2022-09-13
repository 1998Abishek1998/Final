import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wrapper from "../assets/wrappers/imageSlider";
import React from "react";

const ImageSlider = React.memo(({ data }) => {
  const setting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <div>
        <Slider {...setting} className="slideimages">
          {data.images.map((image, index) => {
           
            return (
              <div key={image+index} className="slide-container">
                <img src={image} alt="" className="slideimg" />
              </div>
            );
          })}
        </Slider>
      </div>
    </Wrapper>
  );
});

export default ImageSlider;
