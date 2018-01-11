import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import banner from "./banner.jpeg";
const primary = "#2DE5FF";
const primary_shadow = "#2AD0E6";

const ActionButton = styled.a`
  padding: 20px;
  text-decoration: none;
  color: white;
  background: ${primary};
  border-radius: 5px;
  font-size: 20px;
  border-right: 3px solid ${primary_shadow};
  border-bottom: 3px solid ${primary_shadow};
`;

const Banner = () => (
  <Flex
    direction="column"
    style={{
      height: "70vh",
      backgroundImage: `url(${banner})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      color: "white"
    }}
  >
    <Box my={200} mx={20}>
      <p
        style={{
          fontSize: "40px",
          fontWeight: "900",
          textTransform: "uppercase"
        }}
      >
        A curated list of talented and passionate
      </p>
      <p style={{ fontSize: "50px", fontFamily: "Rubik Mono One" }}>
        Jamaican Developers
      </p>
      <ActionButton href="https://github.com/Pr0x1m4" target="_blank">
        Join now!
      </ActionButton>
    </Box>
  </Flex>
);

const LanguageBlock = styled(Box)`
  width: 150px;
  height: 100px;
  background: ${primary};
  border-radius: 5px;
  border-right: 5px solid ${primary_shadow};
  border-bottom: 5px solid ${primary_shadow};
  text-align: center;
`;

const LanguageTitle = styled.p`
  font-size: 50px;
  color: white;
  margin: 0 auto;
  font-family: "Rubik Mono One";
  margin-top: 20px;
`;

const IndexPage = () => (
  <div>
    <Banner />
  </div>
);

export default IndexPage;
