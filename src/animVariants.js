const fadeInDown = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const staggerVar = (duration) => {
  return {
    animate: {
      transition: {
        staggerChildren: duration,
      },
    },
  };
};

const slideFromLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
};

const slideFromRight = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
};

export { fadeInDown, staggerVar, slideFromLeft, slideFromRight };
