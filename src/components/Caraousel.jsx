import React from "react";
import Carousel from "react-multi-carousel";

const Caraousel = ({children}) => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },items: 1
        }
    };

  return (
    <div style={{paddingBottom: '30px',position: 'relative'}}>
      <Carousel
        arrows={false}
        autoPlay
        infinite
        additionalTransfrom={0}
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container-with-dots"
        focusOnSelect={false}
        minimumTouchDrag={80}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={true}
        renderDotsOutside
        responsive={responsive}
        rewindWithAnimation={false}
        shouldResetAutoplay
        showDots
        slidesToSlide={1}
      >
        {
            children
        }
      </Carousel>
    </div>
  );
};

export default Caraousel;
