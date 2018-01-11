import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";

import Header from "../components/Header";
import pattern from "./round.png";

import "./index.css";
const primary = "#2DE5FF";
const primary_shadow = "#2AD0E6";

const Footer = styled.footer`
  height: 100px;
  background: ${primary};
  color: white;
  text-align: center;
  background-image: url(${pattern});
  background-blend-mode: multiply;
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Dev Refined"
      meta={[
        {
          name: "description",
          content: "A curated list of talented developers in Jamaica"
        },
        { name: "keywords", content: "programming, developers" }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto"
      }}
    >
      {children()}
    </div>
    <Footer>
      <Flex align="center">
        <Box width={1}>
          <p>MADE BY JORDAN JONES</p>
        </Box>
      </Flex>
    </Footer>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
