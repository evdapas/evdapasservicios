import Link from "next/link";
import React, { useState } from "react";
import classes from "./Header.module.scss";
import Image from "next/image";


export const navigation = [
  { name: "Főoldal", link: "/" },
  { name: "Rólunk", link: "/about" },
  { name: "Munkáink", link: "/munkaink" },
  { name: "Kapcsolat", link: "/contact" },
  { name: "Blog", link: "/posts" },
];

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function navbarOpenHandler() {
    setNavbarOpen(!navbarOpen);
  }
  return (
    <nav className={classes.navigation}>
      <div className={classes.logo}>
        <Link href="/">
          <a className={classes.image}>
            <Image
              layout="intrinsic"
              src="/images/logo_dixwebs.webp"
              width="65"
              height="65"
              alt="LOGO"
              priority
            />
          </a>
        </Link>
      </div>

      <div onClick={navbarOpenHandler} className={classes.hamburger}>
        <div className={classes.hamburger_line} />
        <div className={classes.hamburger_line} />
        <div className={classes.hamburger_line} />
      </div>
      <ul className={classes.navigation_list}>
        {navigation.map((nav) => (
          <li className={classes.navigation_item} key={nav.name}>
            <Link href={nav.link}>{nav.name}</Link>
          </li>
        ))}
       
      </ul>
      {navbarOpen && (
        <ul className={classes.navigation_asside}>
          {navigation.map((nav) => (
            <li className={classes.navigation_item} key={nav.name}>
              <Link href={nav.link}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Header;
