import React, { useEffect } from "react";

import { Helmet } from "react-helmet";

import { withPrefix, graphql } from "gatsby";
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next";

import Header from "./header";
import Footer from "./footer";
// import "../i18n";

// import PropTypes from 'prop-types'
// import Spinner from './spinner'
// {/* <link rel="stylesheet"  href={withPrefix('css/bootstrap.min.css')}    type="text/css"  />
// <link rel="stylesheet"  href={withPrefix('css/font-awesome.min.css')}    type="text/css"  />
// <link rel="stylesheet"  href={withPrefix('css/animate.css')}    type="text/css"  />
// <link rel="stylesheet"  href={withPrefix('css/owl.carousel.css')}    type="text/css"  />
// <link rel="stylesheet"  href={withPrefix('css/owl.theme.default.min.css')}    type="text/css"  />
// <link rel="stylesheet"  href={withPrefix('css/tooplate-style.css')}    type="text/css"  /> */}
const Layout = ({ children, location, title, ns }) => {
  // const { t, i18n } = useTranslation(["app","blog"]);
  const { t, languages, changeLanguage, language } = useI18next(ns);

  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath
  // let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  useEffect(() => {
    document.onclick = (e) => {
      if (
        e.target.classList.contains("swlang") ||
        e.target.classList.contains("languages-switcher")
      ) {
        $(".languages").fadeToggle(300);
        setTimeout(() => {
          $(".languages").fadeOut(300);
        }, 10000);
      } else {
        $(".languages").fadeOut(300);
      }
    };
  }, []);

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: language,
          dir: language == "ar" ? "rtl" : "ltr",
        }}
        title={title || "clinique latreche"}
      >
        {/* <title>          
          {t("Clinic", "Clinic")}
        </title> */}
        <script
          src={withPrefix("js/custom.js")}
          type="text/javascript"
          async={true}
        />
      </Helmet>
      <Header ns={ns} />
      {children}
      {/* <main>{children}</main> */}
      <Footer ns={ns} />
    </>
  );
};

// Layout.propTypes = {

// }
// {
/* <main>
</main> */
// }

export default Layout;

// export const query = graphql`
//   query ($language: String!) {
//     locales: allLocale(
//       filter: { ns: { in: ["app"] }, language: { eq: $language } }
//     ) {
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
