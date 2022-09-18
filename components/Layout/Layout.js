import React from "react";
import Head from "next/head";
import classes from "./Layout.module.scss";
import Header from "./Header";
import { useRouter } from "next/router";
import Showcase from "./Showcase";
import Footer from "./Footer";
import Card from "../ui/Card";
import Link from "next/link";
import ChangeLanguage from "../language/ChangeLanguage";

function Layout({ title, description, keywords, children }) {
  keywords =
    "weboldal keszites, weboldal készítés, reszponziv weboldal keszites, weboldal készítés egyéni vállalkozó, web-development, céges weboldal készítés, SEO, weboldal készítés árak,ingyenes weboldal készítés,weblap készítés banner,weboldal készítés csomagok,weboldal készítés cég, céges weboldal készítés,profi weboldal készítés,html weboldal készítés,saját weboldal készítés,reszponzív weboldal készítés,weboldal keszites arak,weboldal készítés ajánlat,weboldal készítés angol,akadálymentes weboldal készítés,akciós weboldal készítés,weboldal készítés ar,weboldal készítés árak,weboldal készítés árlista, weboldal készítés árajánlat minta, honlap készítés árak, reszponzív weboldal készítés ár, egyedi weboldal készítés, egyszerű weboldal készítés, eger weboldal készítés, mennyibe kerül egy weboldal készítés, weboldal készítés érettségi, weboldal készítés informatika érettségi, weboldal készítés folyamata, weblap készítés feladatok, fizetős weboldal készítés, facebook weboldal készítés, fotós weboldal készítés, weboldal készítés győr, weboldal készítés gyakori kérdések, weboldal készítés google, weboldal készítés gyorsan, weboldal készítés gyakori, weblap készítés győr, honlap készítés győr, gyors weblapkészítés, weboldal készítés ingyen google, ingyenes weboldal készítés google, grafikus weboldal készítés, gyöngyös weboldal készítés, gödöllő weboldal készítés,  weboldal készítés ingyen gyakori kérdések, weboldal készítés html, weboldal készítés házilag, weboldal készítés hirdetés, honlap készítés házilag, hajdúszoboszló weboldal készítés,weboldal honlapkészítés, .hu weboldal készítés, hirdetési weboldal készítés, weboldal készítés ingyen, weboldal készítés ingyen magyarul, weboldal készítés ingyen online, honlap készítés ingyen, weblap készítés informatika érettségi, weboldal készítés tanfolyam ingyen, ingyen weboldal készítés online";
  const router = useRouter();

  return (
    <div className={classes.layout}>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
        <meta name="description" content={description}></meta>
        <meta name="keywoeds" content={keywords}></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Header />
      <ChangeLanguage />
      {router.pathname === "/" && <Showcase />}
      <div>{children}</div>
      <Footer />
    </div>
  );
}
Layout.defaultProps = {
  title: "Weboldal készítés | Egyedi weblapok fejlesztése kedvező áron",
  description:
    "Személyre szabott és reszponzív profi honlapokat készítünk a legújabb trendeknek megfelelően, a legversenyképesebb árakon.",
  keywords:
    "weboldal, web oldal, web lap, weblap, olcsó weboldal, olcsó weblap, gyors weboldal, gyors weblap, weboldal készités ingyen, weboldal keszites ingyen, weblap keszites ingyen, web-design, cég weboldal készítés, weboldal készítés, weboldal készítés árak, weboldal keszites arak,  weboldal készítés debrecen, weblap készítés, weblap készítés ár, weblap fejlesztés, weboldal fejlesztés, weboldal készitő, weblap készítés debrecen, weblap készítés domain, weboldal készítés saját domain, dinamikus weboldal készítés, design weboldal készítés, html weboldal, html weblap, olcso weboldal, olcso weblap, ingyenes weboldal, react, next.js, javascript, css, javascript weboldal, optimizált weboldal, optimizált weblap, SEO, search engine optimization, kereso motor optimizalas, magyar weboldal, magyar weboldal készitése, weboldal magyarul",
};
export default Layout;
