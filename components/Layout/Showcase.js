import React, { Fragment } from "react";
import Button from "../ui/Button";
import Wave from "../ui/Wave";
import { useRouter } from "next/router";

import classes from "./Showcase.module.scss";

const showcaseContent = {
  "hu-HU": {
    content: [
      {
        text: "Weboldal készítés a legújabb trendeknek megfelelően. Célunk, hogy segítsünk abban, hogy vállalkozása elérje az ön által elvárt eredményeket",
        buttonText: "Kérjen ajánlatot!",
      },
    ],
  },
  "ro-RO": {
    content: [
      {
        text: "Creare site-uri web conform ultimelor tendinte. Scopul nostru este să vă ajutăm ca afacerea dumneavoastră să obțină rezultatele pe care le așteptați",
        buttonText: "Solicită o ofertă!",
      },
    ],
  },
};

function Showcase() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { title, content } = showcaseContent[locale];
  return (
    <Fragment>
      <div className={classes.showcase}>
        {content.map((showcaseItem, i) => (
          <div key={i} className={classes.text}>
            <h1>{showcaseItem.text}</h1>
            <Button className={classes.btn_violet} href="/contact">
              {showcaseItem.buttonText}
            </Button>
          </div>
        ))}

        <Wave />
      </div>
    </Fragment>
  );
}

export default Showcase;
