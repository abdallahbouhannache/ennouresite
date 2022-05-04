import * as React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  const { t, i18n } = useTranslation(["app", "blog"]);

  return (
    <main style={pageStyles}>
      <title>{t("Not found")}</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>
        {t("we couldn’t find what you were looking for.")}
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            {t("Try creating a page in")}
            <code style={codeStyles}>{t("src/pages/")}</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">{t("Go home")}</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;

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
