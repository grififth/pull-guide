import React from "react";
import { motion } from "framer-motion";

const Quote = ({ qImage, qAuthor, qInfo, qText, variant }) => {
  return (
    <motion.div
      className="landing-quotes-quote"
      variants={variant}
      initial="initial"
      whileInView="animate"
    >
      <div className="quote-info">
        <img src={qImage} alt="quote" />
        <div className="author-info">
          <h1>{qAuthor}</h1>
          <p>{qInfo}</p>
        </div>
      </div>
      <div className="quote-text">
        <p>{qText}</p>
      </div>
    </motion.div>
  );
};

export default Quote;
