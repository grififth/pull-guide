import React from "react";
import { motion } from "framer-motion";
import { fadeInDown, staggerVar } from "../animVariants";

const LandingHero = () => {
  return (
    <motion.div
      className="landing-hero"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerVar(0.8)}
    >
      <motion.div className="landing-nav" variants={staggerVar(0.5)}>
        <motion.div className="landing-nav-logo" variants={staggerVar(0.2)}>
          <motion.img
            src="./assets/images/chad.jpg"
            alt="logo"
            variants={fadeInDown}
          />
          <motion.h1 variants={fadeInDown}>Pull Guide</motion.h1>
        </motion.div>
        <motion.div className="landing-nav-text" variants={staggerVar(0.1)}>
          <motion.div variants={fadeInDown}>Random</motion.div>
          <motion.div variants={fadeInDown}>Text</motion.div>
          <motion.div variants={fadeInDown}>To</motion.div>
          <motion.div variants={fadeInDown}>Look</motion.div>
          <motion.div variants={fadeInDown}>Fancy</motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="landing-hero-text" variants={staggerVar(0.2)}>
        <motion.h1 variants={fadeInDown}>
          Pull harder than before <br /> with even less effort.
        </motion.h1>
        <motion.p variants={fadeInDown}>
          With advice from <b>certified</b> pull gods with <b>real world</b>{" "}
          experience, we can help <b>you</b> get some bitches.
        </motion.p>
        <motion.p variants={fadeInDown}>
          Don't feel <b>lonely</b> and <b>bitchless</b> any more,{" "}
          <b>We got your back</b>.
        </motion.p>
        <motion.button
          variants={fadeInDown}
          onClick={() => {
            window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
          }}
        >
          Get Started
        </motion.button>
      </motion.div>
      <motion.div
        className="landing-bg"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
            transition: {
              duration: 1,
            },
          },
        }}
      >
        <div className="landing-bg-center"></div>
        <div className="landing-bg-orb landing-bg-orb-pink"></div>
        <div className="landing-bg-orb landing-bg-orb-blue"></div>
      </motion.div>
    </motion.div>
  );
};

export default LandingHero;
