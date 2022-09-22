import React from "react";
import ServicesItem from "./ServicesItem";
import classes from "./Services.module.scss";

function Services(props) {
  const { services } = props;
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>SERVICIOS</h1>
      <div className={classes.services}>
        {services.map((service) => (
          <ServicesItem
            key={service.id}
            slug={service.slug}
            title={service.title}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
