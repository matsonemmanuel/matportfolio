export const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 40,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.3,
  },

  transition: {
    duration: 0.8,
    delay,
    ease: "easeOut",
  },
});

export const fadeLeft = (delay = 0) => ({
  initial: {
    opacity: 0,
    x: -60,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport: {
    once: true,
    amount: 0.3,
  },

  transition: {
    duration: 0.8,
    delay,
    ease: "easeOut",
  },
});

export const fadeRight = (delay = 0) => ({
  initial: {
    opacity: 0,
    x: 60,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport: {
    once: true,
    amount: 0.3,
  },

  transition: {
    duration: 0.8,
    delay,
    ease: "easeOut",
  },
});

export const zoomIn = (delay = 0) => ({
  initial: {
    opacity: 0,
    scale: 0.9,
  },

  whileInView: {
    opacity: 1,
    scale: 1,
  },

  viewport: {
    once: true,
    amount: 0.3,
  },

  transition: {
    duration: 0.8,
    delay,
    ease: "easeOut",
  },
});

export const staggerContainer = (delay = 0) => ({
  hidden: {},

  show: {
    transition: {
      delayChildren: delay,
      staggerChildren: 0.18,
    },
  },
});

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const expandWidth = (delay = 0) => ({
  initial: {
    width: 0,
  },

  whileInView: {
    width: "80px",
  },

  viewport: {
    once: true,
    amount: 0.3,
  },

  transition: {
    duration: 0.8,
    delay,
    ease: "easeOut",
  },
});