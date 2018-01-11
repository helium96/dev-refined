import React from "react";
import Link from "gatsby-link";

import logo from "./devRefined.svg";

const Header = () => (
  <div
    style={{
      background: "white"
    }}
  >
    <div
      style={{
        padding: "5px 5px"
      }}
    >
      <img src={logo} height="50" style={{ margin: "5px" }} />
    </div>
  </div>
);

export default Header;
