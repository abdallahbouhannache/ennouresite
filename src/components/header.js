import React from "react";
import { Helmet } from "react-helmet";
import { withPrefix ,graphql} from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Switcher from "./switchlang";

export default function Header() {
  {
    /* <!-- HEADER -->  */
  }
  const { t } = useTranslation();

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-5" style={{display:'flex'}}>
            <p>
              <Trans>Welcome to Latreche Health Clinic </Trans>
              {t("Go home")}
            </p>
            <Switcher title={"lang"} />
          </div>
          <div className="col-md-8 col-sm-7 text-align-right">
            <span className="phone-icon">
              <i className="fa fa-phone" /> 0672-98-47-15 | 0776-04-56-06
            </span>
            <span className="date-icon">
              <i className="fa fa-calendar-plus-o" /> 8:00 - 23:30 (Sun-Thu)
            </span>
            <span className="email-icon">
              <i className="fa fa-envelope-o" />
              <a href="#">CLINIQUELATRECHE@GMAIL.COM</a>
            </span>
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
