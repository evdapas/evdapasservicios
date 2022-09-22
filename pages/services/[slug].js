import React from "react";
import ServicesDescription from "../../components/services/ServicesDescription";
import { getAllServices, getServicesBySlug } from "../../lib/helpers";

function ServicesDescriptionPage(props) {
  return <ServicesDescription service={props.service} />;
}
export function getStaticProps(context) {
  const slug = context.params.slug;

  const oneService = getServicesBySlug(slug);
  return { props: { service: oneService }, revalidate: 600 };
}
export function getStaticPaths() {
  const services = getAllServices();
  const paths = services.map((service) => ({ params: { slug: service.slug } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default ServicesDescriptionPage;
