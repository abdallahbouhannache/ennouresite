import * as React from "react";
import { Link , graphql } from "gatsby";

import Service from "./service";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display:'flex',
  flexDirection:'column',
  display:'none',
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
  const data = [
    {
      img: "images/romdr.jpg",
      title: "Medical Examinations",
      ullist: [
        "Follow-up of chronic diseases (diabetes, blood pressure...)",
        "Treatment room, changing dressings, needles, etc ",
      ],
    },
    {
      img: "images/romdr2.jpg",
      title: "Medical Examinations",
      ullist: [
        "Follow-up of chronic diseases (diabetes, blood pressure...)",
        "Treatment room, changing dressings, needles, etc ",
      ],
    },
  ];
  return (
    <section style={pageStyles} className="container detailServices">
      <div className="listServices" style={listservicesCss} >
        <Service data={data[0]} />
        <Service data={data[1]} />
        <Service data={data[1]} />
        <Service data={data[1]} />
      </div>
    </section>
  );
};

export default Services;
