export const animationVariants = {
    fadeIn: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { duration: 0.7 },
    },
    slideIn: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.7 },
      viewport: { once: true },
    },
    slideUp: {
      initial: { y: 50, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      transition: { duration: 0.7 },
      viewport: { once: true },
    },
    slideLeft: {
      initial: { opacity: 0, x: '-100%' },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { duration: 0.7 },
    },
    slideRight: {
      initial: { opacity: 0, x: '100%' },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { duration: 0.7 },
    },
    blurFade: {
      initial: { opacity: 0, filter: 'blur(8px)' },
      whileInView: { opacity: 1, filter: 'blur(0px)' },
      transition: { duration: 0.7 },
    },
    none: {},
  };