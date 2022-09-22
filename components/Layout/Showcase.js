import React from "react";
import classes from "./Showcase.module.scss";
import Button from "../ui/Button";

function Showcase() {
  return (
    <div className={classes.showcase}>
      <h1>
        Ofrecemos servicios de escalada de servicios industriales con los más
        altos estándares de seguridad.
      </h1>
      <h2>El acceso por cuerdas es un método alternativo rápido y seguro.</h2>
      <Button className={classes.btn} href="/contact">
        Solicita la oferta
      </Button>
    </div>
  );
}

export default Showcase;
