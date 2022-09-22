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
        <Link href="https://www.facebook.com/" passHref={true}>
          <a>
            <FaFacebookF />
          </a>
        </Link>
        <Link href="https://www.instagram.com/" passHref={true}>
          <a>
            {" "}
            <FaInstagram />
          </a>
        </Link>
        <Link href="https://wa.me/" passHref={true}>
          <a>
            <FaWhatsapp />
          </a>
        </Link>
        <Link href="mailto:" passHref={true}>
          <a>
            <FaEnvelope />
          </a>
        </Link>
      </div>

      <div className={classes.footer_links}>
        {navigation.map((nav) => (
          <div key={nav.name} className={classes.footer_links__item}>
            <Link href={nav.link}>{nav.name}</Link>
          </div>
        ))}
      </div>

      <div className={classes.footer_copy}>
        <p>&copy; Evdapas servicios y mantenimiento SRl</p>
        <p>{dynamicFooterDate}</p>
      </div>
    </footer>
  );
}

export default Footer;
