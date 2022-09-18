import React from "react";
import classes from "./Footer.module.scss";
import { navigation } from "./Header";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";
function Footer() {
  const dynamicFooterDate = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_social__media}>
        <a
          href="https://www.facebook.com/dixwebs12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/dixwebs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="https://wa.me/+36707369823">
          <FaWhatsapp />
        </a>
        <a
          href="mailto:office@dixwebs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>

      <ul className={classes.footer_links}>
        {navigation.map((nav) => (
          <li key={nav.name} className={classes.footer_links__item}>
            <Link href={nav.link}>{nav.name}</Link>
          </li>
        ))}
      </ul>

      <div className={classes.footer_copy}>
        <p>&copy; DIXWEBS</p>
        <p>Website Design & Development</p>
        <p>{dynamicFooterDate}</p>
      </div>
    </footer>
  );
}

export default Footer;
