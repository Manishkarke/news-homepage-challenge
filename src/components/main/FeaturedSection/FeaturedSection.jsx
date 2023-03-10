import React from "react";
import style from "./FeaturedSection.module.css";

const FeaturedSection = () => {
  return (
    <div className={style.featuredSection}>
      <img src="./assets/images/image-web-3-desktop.jpg" alt="Web3_Photo" />

      <div className={style["section"]}>
        <div className={style["sub-section1"]}>
          <h1>The Bright Future of Web 3.0?</h1>
        </div>

        <div className={style["sub-section2"]}>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className={style.button}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
