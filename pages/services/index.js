import React from "react";

import Services from "../../components/services/Services";
import { getAllServices } from "../../lib/helpers";

function ServicesPage(props) {
  return <Services services={props.services} />;
}
export function getStaticProps() {
  const allServices = getAllServices();
  return { props: { services: allServices } };
}
export default ServicesPage;
