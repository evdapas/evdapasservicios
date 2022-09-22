import React, { useRef } from "react";
import classes from "./Contact.module.scss";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Card from "./ui/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contactInfo = [
  {
    name: "Tel",
    value: "",
    href: "",
    icon: <FaPhone className={classes.icon} />,
  },
  {
    name: "Whatsapp",
    value: "",
    href: "https://wa.me/3",
    icon: <FaWhatsapp className={classes.icon} />,
  },
  {
    name: "Email",
    value: "",
    href: "mailto:",
    icon: <FaEnvelope className={classes.icon} />,
  },
];

function Contact() {
  ////framer
  const squareVariants = {
    visible: { x: 0, transition: { duration: 1 } },
    hidden: { x: -300 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const nameRef = useRef();
  const telRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();

    const values = {
      nameme: nameRef.current.value,
      tel: telRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );
    if (hasEmptyFields) {
      toast.error("Por favor rellena todos los campos");
    }
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });
    e.target.reset();

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error("No token included");
        return;
      }
      toast.error("Something Went Wrong");
    } else {
      const message = await res.json();
      router.push("/thankYou");
    }
  }
  return (
    <Card>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        className={classes.contact}
      >
        <div className={classes.form}>
          <h1>Solicita Información!</h1>
          <ToastContainer />
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label>
            <input id="name" type="text" ref={nameRef} />
            <label htmlFor="tel">Teléfono</label>
            <input id="tel" type="number" ref={telRef} />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" ref={emailRef} />
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" rows={4} ref={messageRef} />
            <button type="submit" className={classes.btn}>
              Enviar
            </button>
          </form>
        </div>
        <div className={classes.informations}>
          <h1>Contacto</h1>
          <p>
            ¿Tienes alguna pregunta sobre nosotros? ¿Estás interesado en
            trabajar con nosotros? ¿Tienes alguna sugerencia para nosotros o
            simplemente quieres saludarnos? Solo contáctenos. Estamos aquí para
            ayudar.
          </p>

          {contactInfo.map((item) => (
            <a key={item.name} href={item.href} target="blank" rel="noreferrer">
              {item.icon}
              {item.value}
            </a>
          ))}
        </div>
      </motion.div>
    </Card>
  );
}

export default Contact;
