import React from "react";
import style from "./NewSection.module.css";

const Data = [
  {
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

function NewSection() {
  return (
    <div className={style.NewSection}>
      <h2>New</h2>
      {Data.map((news, index) => {
        return (
          <div
            className={`${style.topNews} ${
              index === Data.length - 1 && style.noBottomBorder
            }`}
            key={index}
          >
            <h3>{news.title}</h3>
            <p>{news.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default NewSection;
