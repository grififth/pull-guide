import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { fadeInDown } from "../animVariants";

const SCROLL_DISTANCE = 100;

const LandingScroll = () => {
  const [scrollAmount, setScrollAmount] = useState(0);

  const controls = useAnimation();

  const handleControls = async () => {
    await controls.start({
      opacity: 0,
      y: -10,
      transition: {
        duration: 0,
      },
    });
    await controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1.5,
      },
    });
  };

  const handleScroll = () => {
    setScrollAmount(
      window.scrollY > SCROLL_DISTANCE ? SCROLL_DISTANCE : window.scrollY
    );
    controls.start((scrollDist) => ({
      opacity: 1 - (scrollDist / SCROLL_DISTANCE).toFixed(2),
      y: 0,
    }));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleControls();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="landing-scroll"
      animate={controls}
      custom={scrollAmount}
    >
      <p>Scroll Down</p>
    </motion.div>
  );
};

export default LandingScroll;
