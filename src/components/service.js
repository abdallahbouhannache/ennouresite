import React from "react";
import { graphql } from "gatsby";

const serviceitems = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  margin: 0,
  padding: "4rem 0",
  // height: "30em",
};

const serviceContent = {
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  padding: "5em 3em",
  justifyContent: "space-evenly",
};

function service({ data }) {
  return (
    <div
      className="serviceitems servicedetail1  wow fadeInUp"
      data-wow-delay="0.4s"
      style={serviceitems}
    >
      <img
        className="img-responsive"
        src={data.img}
        alt="imga"
        style={{ width: "35em" }}
      />
      <div className="content" style={serviceContent}>
        <h3>{data.title} </h3>
        <ul>
          {data.ullist.map((el, ind) => {
            return <li key={ind}>{el}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default service;
