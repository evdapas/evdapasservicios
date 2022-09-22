import Image from "next/image";
import Card from "../ui/Card";
import classes from "./ServicesDescription.module.scss";

export default function ServicesDescription(props) {
  const { title, slug, image, description } = props.service;
  const imagePath = `/images/services/${slug}/${image}`;
  return (
    <div className={classes.description}>
      <h1>{title}</h1>
      <div className={classes.description_grid}>
        <div className={classes.image}>
          <Image
            width={1000}
            height={800}
            src={imagePath}
            alt={title}
            layout="responsive"
            objectFit="cover"
            priority={true}
          />
        </div>
        <div className={classes.content}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
