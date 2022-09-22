import React from "react";
import classes from "./Card.module.scss";

function Card(props) {
  return (
    <div ref={props.ref} className={`${classes.card} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Card;
