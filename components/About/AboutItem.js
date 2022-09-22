import React from "react";
import classes from "./AboutItem.module.scss";

function AboutItem(feature) {
  return (
    <div>
      <div key={feature.title} className={classes.aboutItem}>
        <h1>{feature.title}</h1>{" "}
        <div className={classes.icon}>{feature.icon}</div>
        <p>{feature.description}</p>
      </div>
    </div>
  );
}

export default AboutItem;
