import React from "react";
import TestimonialItem from "./TestimonialItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./TestimonialCarousel.module.scss";

export default function TestimonialCarousel({ testimonials }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className={classes.container}>
      <h1>RÓLUNK MONDTÁK</h1>
      <div className={classes.line}></div>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {testimonials.map((testimonial) => (
          <TestimonialItem
            key={testimonial.name}
            name={testimonial.name}
            text={testimonial.text}
            image={testimonial.image}
            stars={testimonial.stars}
          />
        ))}
      </Carousel>
      ;
    </div>
  );
}
