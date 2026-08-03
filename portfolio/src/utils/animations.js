

export const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 40,
  },

  animate: {
    opacity: 1,
    y: 0,
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
    scale: 0.8,
  },

  animate: {
    opacity: 1,
    scale: 1,
  },

  transition: {
    duration: 1,
    delay,
    ease: "easeOut",
  },
});