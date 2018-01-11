import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import "./index.css";

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
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
