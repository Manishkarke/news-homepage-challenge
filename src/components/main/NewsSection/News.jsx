import React from "react";
import style from "./News.module.css";

const Data = [
  {
    id: "01",
    imgPath: "./assets/images/image-retro-pcs.jpg",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
  },
  {
    id: "02",
    imgPath: "./assets/images/image-top-laptops.jpg",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
  },
  {
    id: "03",
    imgPath: "./assets/images/image-gaming-growth.jpg",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
  },
];

function News() {
  return (
    <div className={style["container"]}>
      {Data.map((data) => {
        return (
          <div className={style["news-section"]} key={data.id}>
            <img src={data.imgPath} alt={data.description} />

            <div className={style["sub-section"]}>
              <h2>{data.id}</h2>

              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default News;
