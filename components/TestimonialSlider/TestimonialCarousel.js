import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import classes from "./ItemCarousel.module.scss";
import useWindowSize from "../../helpers/animate-on-scroll";
import TestimonialItem from "./TestimonialItem";

export default function TestimonialCarousel({ testimonials }) {
  const size = useWindowSize();
  const width = size.width;
  const numOfCards = width < 786 ? 1 : 3;
  function getChevronWidth() {
    let chevronWidth;
    if (width < 768) {
      chevronWidth = 10;
    } else {
      chevronWidth = 80;
    }
    return chevronWidth;
  }
  let chevronsWidth = getChevronWidth();

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  

  return (
    <div style={{ padding: `0 ${chevronsWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numOfCards}
        gutter={10}
        leftChevron={
          <div className={`${classes.btn} ${classes.left}`}>{"<"}</div>
        }
        rightChevron={
          <div className={`${classes.btn} ${classes.right}`}>{">"}</div>
        }
        outsideChevron
        chevronWidth={chevronsWidth}
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
      </ItemsCarousel>
    </div>
  );
}
