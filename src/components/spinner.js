import React from "react";

export default function Spinner({classe=""}) {

  
  return (
    <section className={"preloader mainpre "+classe}  >
      <div className="spinner">
        <span className="spinner-rotate" />
      </div>
    </section>
  );
}
