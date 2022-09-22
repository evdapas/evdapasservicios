import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import classes from "./Cta.module.scss";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function CtaLeft(props) {
  ////framer
  const squareVariants = {
    visible: { x: 0, opacity: 1, transition: { duration: 1.5 } },
    hidden: { x: -300, opacity: 0 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const { description, image, slug, title } = props.service;
  const imagePath = `/images/services/${slug}/${image}`;
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className={classes.cta}
    >
      <div className={classes.image}>
        <Image
          src={imagePath}
          width={700}
          height={500}
          alt={title}
          layout="responsive"
        />
      </div>
      <div className={classes.content}>
        <h1>{title}</h1>
        <p>{description}</p>
        <Button className={classes.btn} href="./contact">
          Solicita la oferta
        </Button>
      </div>
    </motion.div>
  );
}

export default CtaLeft;
