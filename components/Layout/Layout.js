import React from "react";
import Head from "next/head";
import classes from "./Layout.module.scss";
import Header from "./Header";
import { useRouter } from "next/router";
// import Showcase from "./Showcase";
import Showcase from "./Showcase";
import Footer from "./Footer";


function Layout({ title, description, keywords, children }) {
  const router = useRouter();

  return (
    <div className={classes.layout}>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description}></meta>
        <meta name="keywoeds" content={keywords}></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Header />

      {router.pathname === "/" && <Showcase />}

      <div>{children}</div>
      <Footer />
    </div>
  );
}
Layout.defaultProps = {
  title: "Evdapas ",
  description: "Evdapas servicios y mantenimiento SRl",
  keywords: "prontitud, seguridad,servicios y mantenimiento, implicación",
};
export default Layout;
