import React from "react";

function NavBar(props) {
  const navigationLinks = ["Home", "New", "Popular", "Trending", "Categories"];
  return (
    <div className={props.className}>
      <ul>
        {navigationLinks.map((item, index) => {
          return (
            <li key={index}>
              <a href="/has">{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavBar;
