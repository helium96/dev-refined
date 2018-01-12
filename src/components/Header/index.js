import React from "react";
import Link from "gatsby-link";

import { Flex, Box } from "grid-styled";
import logo from "./devRefined.svg";

const Header = () => (
  <div
    style={{
      background: "white"
    }}
  >
    <Flex px={15} py={5} style={{ maxWidth: "900px", margin: "0 auto" }}>
      <Box width={[1 / 2, 1 / 2, 1 / 6]}>
        <img src={logo} height="50" />
      </Box>
      <Box width={[1 / 2, 1 / 2, 5 / 6]} style={{ textAlign: "right" }}>
        <br />
        <a
          style={{ color: "#2DE5FF" }}
          href="https://github.com/Pr0x1m4/dev-refined"
          target="_blank"
        >
          <b>GITHUB</b>
        </a>
      </Box>
    </Flex>
  </div>
);

export default Header;
