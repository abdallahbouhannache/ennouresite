import React from "react";
import { Helmet } from "react-helmet";
import { withPrefix, graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Header from "./header";
import Footer from "./footer";

// import PropTypes from 'prop-types'
// import Spinner from './spinner'
// {/* <link rel="stylesheet"  href={withPrefix('css/bootstrap.min.css')}    type="text/css"  />
// <link rel="stylesheet"  href={withPrefix('css/font-awesome.min.css')}    type="text/css"  />
// <link rel="stylesheet"  href={withPrefix('css/animate.css')}    type="text/css"  />
// <link rel="stylesheet"  href={withPrefix('css/owl.carousel.css')}    type="text/css"  />
// <link rel="stylesheet"  href={withPrefix('css/owl.theme.default.min.css')}    type="text/css"  />
// <link rel="stylesheet"  href={withPrefix('css/tooplate-style.css')}    type="text/css"  /> */}
const Layout = ({ children, location, title }) => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Welcome to my Gatsby site")}</title>
        <script
          src={withPrefix("js/custom.js")}
          type="text/javascript"
          async={true}
        />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
};

// Layout.propTypes = {

// }
{
  /* <main>
</main> */
}

export default Layout;

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
