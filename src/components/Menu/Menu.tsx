import React from "react";
import "./Menu.css";

const Menu = () => {
  interface Link {
    href: string;
    target: string;
  }
  const home: Link = {
    href: "#",
    target: "_blank",
  };
  const contact: Link = {
    href: "#",
    target: "_blank",
  };
  const about: Link = {
    href: "#",
    target: "_blank",
  };
  const signIn: Link = {
    href: "#",
    target: "_blank",
  };
  return (
    <div>
      <div className="container">
        <div className="logo">
          <img src="https://i.ibb.co/BCsykJW/large-ultracademy.png" alt="" />
        </div>
        <div className="menu">
          <a {...home}>Home</a>
          <a {...contact}>Contact</a>
          <a {...about}>About</a>
          <a {...signIn}>
            <img style={{ width: "35px", height: "35px", borderRadius: "50%" }} src="https://i.ibb.co/B61Br7L/user-icon.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
