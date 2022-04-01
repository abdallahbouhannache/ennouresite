import React from "react";

export default function Menu() {
  {
    /* <!-- MENU --> */
  }
  return (
    <section
      className="navbar navbar-default navbar-static-top"
      role="navigation"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="icon icon-bar" />
            <span className="icon icon-bar" />
            <span className="icon icon-bar" />
          </button>
          {/* lOGO TEXT HERE */}
          {/* <i className="fa fa-stethoscope" aria-hidden="true" /> */}
          <a href="#top" className="navbar-brand">
            Clinic
              <img
                src="images/logo.png"
                className="img-responsive"
                alt="picture"
                style={{ width: "1em" }}
              />
            Latreche
          </a>
        </div>
        {/* MENU LINKS */}
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#top" className="smoothScroll">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="smoothScroll">
                About Us
              </a>
            </li>
            <li>
              <a href="#team" className="smoothScroll">
                Services
              </a>
            </li>
            <li>
              <a href="#home" className="smoothScroll">
                Clinic
              </a>
            </li>
            <li>
              <a href="#google-map" className="smoothScroll">
                Contact
              </a>
            </li>
            <li className="appointment-btn">
              <a href="#appointment">Make an appointment</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
