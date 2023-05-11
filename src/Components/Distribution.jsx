import React, { useEffect } from "react";
import "../Styles/Distribution.scss";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import twophones from "../Images/twophones.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Distribution = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("vissible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const list = {
    vissible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  const item1 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  const item2 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };
  return (
    <div className="app__distribution">
      <motion.div
        ref={ref}
        animate={control}
        variants={list}
        className="distribution__container"
      >
        <motion.div variants={item1} className="left__distribution">
          <div className="distribution__text">
            <h1>A'imate also works on your phone.</h1>
            <p>
              The company itself is a very successful company. Times of blissful
              pleasures are often brought to bear by flattery corrupt, they
              never accuse us of the error of choosing expedients. He hates
              being bound to cause any more pains.
            </p>
          </div>
          <div className="distribution__buttons">
            <button>
              <BsApple />
              Download App
            </button>
            <button>
              <IoLogoGooglePlaystore />
              Download App
            </button>
          </div>
        </motion.div>
        <motion.div variants={item2} className="right__distribution">
          <img src={twophones} alt="" draggable={false} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Distribution;
