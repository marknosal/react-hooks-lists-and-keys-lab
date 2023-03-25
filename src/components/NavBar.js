import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const jsxElements = links.map(link => {
    return <a href={'#'+link} key={link}>{link}</a>
  })

  return <nav>{jsxElements}</nav>;
}

export default NavBar;
