import React from "react";

import { motion } from "framer-motion";

import { slideFromLeft, slideFromRight } from "../animVariants";

const LandingInsurance = () => {
  return (
    <motion.div className="landing-insurance" initial="initial">
      <div className="landing-insurance-text">
        <motion.h1 variants={slideFromLeft(0)} whileInView="animate">
          We know getting bitches is hard.
        </motion.h1>
        <motion.p variants={slideFromLeft(0.3)} whileInView="animate">
          That's why we've invited <b>field experts</b> to come give their tips
          and tricks. Stop wasting time with <b>inefficient flirting</b> and
          terrible haircuts. This pull guide provides a <b>comprehensive</b>,
          <b> curated</b>,<b> organized</b> list of the best ways to get some
          bitches.
        </motion.p>
      </div>
      <motion.img
        variants={slideFromRight(0.7)}
        whileInView="animate"
        src="./assets/images/insurance.svg"
        alt="insurance"
      />
    </motion.div>
  );
};

export default LandingInsurance;
