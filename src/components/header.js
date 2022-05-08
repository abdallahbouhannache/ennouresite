import React from "react";
import { Helmet } from "react-helmet";
import { withPrefix, graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Switcher from "./switchlang";

export default function Header({ ns }) {
  {
    /* <!-- HEADER -->  */
  }
  const { t, i18n } = useTranslation([ns]);
  

  return (
    <header>
      <div className="container">
        <div className="row" style={{ display: "flex" }}>
          <div className="col-md-4 col-sm-5" style={{ display: "flex" }}>
            <p>{t("Welcome to Latreche Health Clinic")}</p>
            <Switcher title={"lang"} />
          </div>
          <div className="col-md-8 col-sm-7 text-align-right">
            <span className="phone-icon">
              <i className="fa fa-phone" /> 0672-98-47-15 | 0776-04-56-06
            </span>
            <span className="date-icon">
              <i className="fa fa-calendar-plus-o" /> 8:00 - 23:30 (
              {t("Sun-Thu")})
            </span>
            <span className="email-icon">
              <i className="fa fa-envelope-o" />
              <a href="#">CLINIQUELATRECHE@GMAIL.COM</a>
            </span>
            {window.location.href.includes("blog") && (
              <span className="home-icon">
                <i class="fa fa-home"></i>
                <a href="/">{t("Home")}</a>
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
// export const query = graphql`
//   query ($language: String!) {
//     locales: allLocale(filter: { language: { eq: $language } }) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `;
