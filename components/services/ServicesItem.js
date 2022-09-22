import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./ServicesItem.module.scss";

function ServicesItem(service) {
  const { slug, title, image } = service;
  const imagePath = `/images/services/${slug}/${image}`;
  const linkPath = `/services/${slug}`;
  return (
    <div className={classes.item}>
      <h1>{title}</h1>
      <Link href={linkPath}>
        <a className={classes.item_link}>
          <Image
            width={700}
            height={500}
            src={imagePath}
            alt={title}
            layout="responsive"
            objectFit="cover"
          />
        </a>
      </Link>
    </div>
  );
}

export default ServicesItem;
