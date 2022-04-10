import React from "react";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";

export default function Header() {
  {
    /* <!-- HEADER -->  */
  }
  return (
   <header>
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-sm-5">
        <p>Welcome to Latreche Health Clinic </p>
      </div>
      <div className="col-md-8 col-sm-7 text-align-right">
        <span className="phone-icon"><i className="fa fa-phone" /> 0672-98-47-15 | 0776-04-56-06 </span>
        <span className="date-icon"><i className="fa fa-calendar-plus-o" /> 8:00 - 23:30  (Sun-Thu)</span>
        <span className="email-icon"><i className="fa fa-envelope-o" /> <a href="#">CLINIQUELATRECHE@GMAIL.COM</a></span>
      </div>
    </div>
  </div>
</header>

  );
}
