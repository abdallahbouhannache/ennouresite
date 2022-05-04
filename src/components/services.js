import * as React from "react";
import { Link, graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

import Service from "./service";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  flexDirection: "column",
  display: "none",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

const listservicesCss = {
  display: "flex",
  flexDirection: "column",
  alignItems: "spaceBetween",
  margin: 0,
  padding: 0,
};

// markup
const Services = () => {
  const { t, i18n } = useTranslation();
  const data = [
    {
      img: "/images/romdr.jpg",
      title: t("Medical Examinations"),
      ullist: [
        t("Follow-up of chronic diseases (diabetes, blood pressure...)"),
        t("Treatment room, changing dressings, needles, etc "),
      ],
    },
    {
      img: "/images/romdr2.jpg",
      title: t("Medical Examinations"),
      ullist: [
        t("Follow-up of chronic diseases (diabetes, blood pressure...)"),
        t("Treatment room, changing dressings, needles, etc "),
      ],
    },
  ];
  return (
    <section style={pageStyles} className="container detailServices">
      <div className="listServices" style={listservicesCss}>
        <Service data={data[0]} />
        <Service data={data[1]} />
        <Service data={data[1]} />
        <Service data={data[1]} />
      </div>
    </section>
  );
};

export default Services;
