import React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

export default function Menu() {
  {
    /* <!-- MENU --> */
  }
  const { t } = useTranslation();

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
            {t("Clinic")}
            <img
              src="images/logo.png"
              className="img-responsive"
              alt="picture"
              style={{ width: "1em" }}
            />
            {t("Latreche")}
          </a>
        </div>
        {/* MENU LINKS */}
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#top" className="smoothScroll">
                {t("Home")}
              </a>
            </li>
            <li>
              <a href="#about" className="smoothScroll">
                {t("About Us")}
              </a>
            </li>
            <li>
              <a href="#team" className="smoothScroll">
                {t("Services")}
              </a>
            </li>
            <li>
              <a href="#home" className="smoothScroll">
                {t("Clinic")}
              </a>
            </li>
            <li>
              <a href="#google-map" className="smoothScroll">
                {t("Contact")}
              </a>
            </li>
            <li className="appointment-btn">
              <a href="#appointment">{t("Make an appointment")}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
