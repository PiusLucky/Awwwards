const wrapper = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.125,
    },
  },
};

const list = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.455, 0.03, 0.515, 0.955] },
  },
};

const cardWrapper = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardItem = {
  hidden: { y: -20, opacity: 0, scale: 0 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
};

const customAwwwardsVariants = {
  wrapper,
  list,
  cardWrapper,
  cardItem,
};

export default customAwwwardsVariants;
