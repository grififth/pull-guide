import React from "react";
import Quote from "./Quote";

import { motion } from "framer-motion";

import { slideFromLeft, slideFromRight, fadeInDown } from "../animVariants";

const LandingQuotes = () => {
  return (
    <div className="landing-quotes">
      <div className="landing-quotes-text">
        <motion.h1
          variants={slideFromLeft(0)}
          initial="initial"
          whileInView="animate"
        >
          It really works.
        </motion.h1>
        <motion.p
          variants={slideFromRight(0.1)}
          initial="initial"
          whileInView="animate"
        >
          Here's what experts and users have had to say.
        </motion.p>
      </div>
      <div className="landing-quotes-quotewall">
        <div className="quote-column">
          <Quote
            qImage="./src/images/dhruva.jpg"
            qAuthor="Dhruva Arun"
            qInfo="Senior Bitch Puller"
            qText="After reading through all the immaculate content that was put into this guide,
            I was genuinely quite shocked at the detail and comprehension of the content. 
            I really wish I was able to find something like this sooner."
            variant={slideFromLeft(0.2)}
          />
          <Quote
            qImage="./src/images/shriyan.png"
            qAuthor="Shriyan Reyya"
            qInfo="Chief Executive Bitch Collector"
            qText="I used to be a bitchless non. My bitch count was lower than your mother's credit score.
            My skills were so extinct, the dodo bird called me and asked me to join him and his flock.
            After finding this guide, I became a changed man. My bitch count is now through the fucking roof and I couldn't be more proud.
            69/69 on this one."
            variant={slideFromLeft(0.2)}
          />
        </div>
        <div className="quote-column">
          <Quote
            qImage="./src/images/eric.png"
            qAuthor="Eric Zou"
            qInfo="Pull God, 5 years experience"
            qText="I can personally say that this is the best guide I've ever read."
            variant={fadeInDown}
          />
          <Quote
            qImage="./src/images/jason.png"
            qAuthor="Jason Youm"
            qInfo="Experienced Hard Puller"
            qText="Viewing this website transformed me. I've been able to pull so much better after seeing this site;
          the amount of times I've pulled has gone up by 2100%!"
            variant={fadeInDown}
          />
        </div>
        <div className="quote-column">
          <Quote
            qImage="./src/images/yina.png"
            qAuthor="Yina Zhou"
            qInfo="Bitch Puller"
            qText="I'm so glad I found this guide. I wasn't able to pull before but now I can pull harder than ever."
            variant={slideFromRight(0.4)}
          />
          <Quote
            qImage="./src/images/stephen.jpg"
            qAuthor="Stephen Zhang"
            qInfo="Bitchless, All His Life"
            qText="I don't follow the advice in this guide. Honestly, that's probably why I've never pulled anyone."
            variant={slideFromRight(0.4)}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingQuotes;
