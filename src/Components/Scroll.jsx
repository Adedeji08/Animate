import React, { useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const Scroll = () => {
  const [isActive, setIsActive] = useState();
  function showArrow() {
    if (window.scrollY >= 300) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  window.addEventListener("scroll", showArrow);
  return (
    <div className={isActive ? "app__sttop active" : "app__sttop"}>
      <a href="#home">
        <BsArrowUp />
      </a>
    </div>
  );
};

export default Scroll;
