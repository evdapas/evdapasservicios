import { useEffect, useState, useRef } from "react";
export function AnimateOnScroll() {
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setIsAnimate(true);
      } else setIsAnimate(false);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  return isAnimate;
}

export function useElementOnScreen(options) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  useEffect(() => {
    const currentRef = containerRef.current;
    const options = {
      root: null,
      threshold: 0.15,
    };
    const observer = new IntersectionObserver(callbackFunction, options);
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [containerRef, options]);
  return [containerRef, isVisible];
}
export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}
