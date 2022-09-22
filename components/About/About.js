import React from "react";
import classes from "./About.module.scss";
import AboutItem from "./AboutItem";
import { FaCheck, FaUserFriends, FaChartLine } from "react-icons/fa";


const features = [
  {
    title: "Características principales",
    description:
      "Puede caracterizarse por tres elementos: prontitud, seguridad, implicación. Somos un equipo de más de 7 años de experiencia en servicios y mantenimiento ",
    icon: <FaUserFriends />,
  },
  {
    title: "Desarrollo",
    description:
      "Estamos constantemente tratando de desarrollar, mejorar y adaptar. La seguridad es lo más importante y, por ello, utilizamos los equipos más eficientes y seguros.",
    icon: <FaChartLine />,
  },
  {
    title: "Flexibilidad",
    description:
      "La flexibilidad también es un aspecto esencial para nosotros y seguramente recibirá una oferta personalizada de acuerdo con sus solicitudes.",
    icon: <FaCheck />,
  },
];

function About() {
  return (
    <div className={classes.about}>
      <h1 className={classes.title}>Evdapas servicios y mantenimiento SRl</h1>

      <div className={classes.grid}>
        {features.map((feature) => (
          <AboutItem
            key={feature.title}
            title={feature.title}
            icon={feature.icon}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
