import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ImageCarousel.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const ImageCarousel = ({ title, row }) => {
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group carousel__left">
        <div className="carouselLeft__top">
          <h1 className="carouselLeft__title">{title}</h1>
          <Link to="/" className="carouselLeft__link">
            See All
          </Link>
        </div>
        <div className="carouselLeft__bottom">
          <button disabled={currentSlide === 0} onClick={() => previous()}>
            <ArrowBackIosIcon fontSize='small'/>
          </button>
          <button onClick={() => next()}>
            <ArrowForwardIosIcon fontSize='small'/>
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="carousel__right">
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-padding-bottom"
        customButtonGroup={<ButtonGroup />}
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 900,
            },
            items: 4,
            partialVisibilityGutter: 40,
            slidesToSlide: 2,
          },
          tablet: {
            breakpoint: {
              max: 900,
              min: 450,
            },
            items: 2,
            partialVisibilityGutter: 30,
            slidesToSlide: 1,
          },
          mobile: {
            breakpoint: {
              max: 450,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
            slidesToSlide: 1,
          },
        }}
        showDots={false}
        sliderClass=""
        swipeable
      >
        {row.map((item) => (
          <div className="carouselRight__item" key={item.index}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.florist}</p>
            <div>
              <button>
                <span>{item.price}</span>
                <span>Add</span>
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
