import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import banner from "./banner.jpeg";
import pattern from "./round.png";

import devlist from "./data.json";

const primary = "#2DE5FF";
const primary_shadow = "#2AD0E6";

const ActionButton = styled.a`
  padding: 20px;
  text-decoration: none;
  color: white;
  background: ${primary};
  border-radius: 5px;
  font-size: 20px;
  float: right;
  border-right: 3px solid ${primary_shadow};
  border-bottom: 3px solid ${primary_shadow};

  &:active {
    background: ${primary_shadow};
  }
`;

const Title = styled.h1`
  font-size: 70px;
  font-family: "Rubik-Bold";
  text-transform: uppercase;

  @media all and (max-width: 1000px) and (max-width: 3000px) {
    font-size: 70px;
  }

  @media all and (max-width: 700px) and (max-width: 1000px) {
    font-size: 60px;
  }

  @media all and (max-width: 300px) and (max-width: 7000px) {
    font-size: 50px;
  }
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
    <Box
      pt={200}
      pl={20}
      style={{ maxWidth: "900px", margin: "0 auto", width: "100%" }}
    >
      <p
        style={{
          fontSize: "27px",
          textTransform: "uppercase"
        }}
      >
        A curated list of talented and passionate
      </p>
      <hr
        style={{
          border: "none",
          outline: "none",
          height: "5px",
          width: "100%",
          margin: "0",
          background: primary
        }}
      />
      <Title>Jamaican Developers</Title>
      <br />
      <br />
      <ActionButton href="https://github.com/Pr0x1m4" target="_blank">
        Join now!
      </ActionButton>
    </Box>
  </Flex>
);

const DevBlock = styled(Box)`
  max-width: 250px;
  height: 250px;
  background: ${primary};
  color: white;
  background-blend-mode: multiply;
  background-image: url(${pattern});
  border-radius: 5px;
  border-right: 5px solid ${primary_shadow};
  border-bottom: 5px solid ${primary_shadow};
  text-align: center;
`;

const DevImage = styled.img`
  margin-top: 20px;
  width: 50%;
  filter: grayscale(100%);
  border-radius: 100%;
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
    <Flex
      style={{ maxWidth: "900px", margin: "0 auto" }}
      pl={20}
      pt={60}
      pb={60}
    >
      {devlist.devs.map(dev => {
        return (
          <DevBlock key={dev.name}>
            <DevImage src={require(dev.image)} />
            <p style={{ fontSize: "20px" }}>{dev.name}</p>
            <p style={{ fontSize: "12px" }}>{dev.type}</p>
          </DevBlock>
        );
      })}
    </Flex>
  </div>
);

export default IndexPage;
