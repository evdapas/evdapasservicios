import React from "react";
import Button from "./ui/Button";
import classes from "./Banner.module.scss";
import Card from "./ui/Card";

function Banner(props) {
  return (
    <Card>
      <div className={classes.banner}>
        <h1>{props.title}</h1>
        <p>{props.message}</p>
        <Button href={props.href}>{props.btnText}</Button>
      </div>
    </Card>
  );
}

export default Banner;
