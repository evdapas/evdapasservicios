import Layout from "../components/Layout/Layout";
import Contact from "../components/Contact";
import TestimonialCarousel from "../components/TestimonialSlider/TestimonialCarousel";
import { getAllTestimonialData } from "../helpers/data";
import About from "../components/About/About";
import Cta from "../components/cta/Cta";
import CtaLeft from "../components/cta/CtaLeft";
import Services from "../components/services/Services";
import { getAllServices } from "../lib/helpers";

export default function Home(props) {
  return (
    <Layout>
      <About />
      <Cta service={props.service1} />
      <Services services={props.services} />
      {/* <TestimonialCarousel testimonials={props.testimonials} /> */}
      <CtaLeft service={props.service2} />
      <Contact />
    </Layout>
  );
}
export function getStaticProps() {
  const allTestimonials = getAllTestimonialData();
  const allServices = getAllServices();

  return {
    props: {
      testimonials: allTestimonials,
      services: allServices,
      service1: allServices[1],
      service2: allServices[5],
    },
  };
}
