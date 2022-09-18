import React from "react";
import Image from "next/image";
import classes from "./TestimonialItem.module.scss";


function TestimonialItem(props) {
  const { name, image, text, stars } = props;
  function createStar(num) {
    const star = "⭐";
    return star.repeat(num);
  }

  return (
    <div key={name} className={classes.testimonials}>
      <div className={classes.myCarousel}>
        <Image
          layout="intrinsic"
          src={image}
          width={75}
          height={75}
          alt="avatar"
          priority
        />
        <div>{createStar(stars)}</div>
        <h1>{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TestimonialItem;
