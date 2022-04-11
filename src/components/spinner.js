import React from "react";
import { Link , graphql } from "gatsby";

export default function Spinner({classe=""}) {


  return (
    <section className={"preloader mainpre "+classe}  >
      <div className="spinner">
        <span className="spinner-rotate" />
      </div>
    </section>
  );
}
