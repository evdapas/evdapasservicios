import React from "react";
import Link from "next/link";
import classes from "./Button.module.scss";

function Button(props) {
  return (
    <Link href={props.href} onClick={props.onClick}>
      <a className={`${classes.btn} ${props.className}`}>{props.children}</a>
    </Link>
  );
}

export default Button;
