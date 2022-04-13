import React from "react";
import { Helmet } from "react-helmet";
import { withPrefix , graphql} from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

export default function Footer() {
  {
    /* <!-- FOOTER --> */
  }
  const { t } = useTranslation();

  return (
    <footer data-stellar-background-ratio={5}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="footer-thumb">
              <h4 className="wow fadeInUp" data-wow-delay="0.4s">
                {t("Contact Info")}
              </h4>
              <p style={{ padding: "0em 0.4em" }}>
                {t("Private Health Care Clinic Latreche ")},<br />
                {t("Ferdjioua")}
                {t(" on Street of Ahmed Boussekin")} ,<br />
                {t(" to the side of nouisser sweets shop")}
              </p>
              <div className="contact-info">
                <p>
                  <i className="fa fa-phone" /> 0672-98-47-15 | 0776-04-56-06{" "}
                </p>
                <p>
                  <i className="fa fa-envelope-o" />{" "}
                  <a href="#" role="email">
                    cliniquelatreche@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="footer-thumb">
              <h4 className="wow fadeInUp" data-wow-delay="0.4s">
                {t("Tools and Equipements")}
              </h4>
              <div className="latest-stories">
                <div className="stories-image">
                  <a href="#">
                    <img
                      src="images/dc30mindray.png"
                      className="img-responsive"
                      alt="imga"
                    />
                  </a>
                </div>
                <div className="stories-info">
                  <a href="#">
                    <h5>{t("Echography")}</h5>
                  </a>
                  <span>{t("March 08, 2018")}</span>
                </div>
              </div>
              <div className="latest-stories">
                <div className="stories-image">
                  <a href="#">
                    <img
                      src="images/ecg2.png"
                      className="img-responsive"
                      alt="imga"
                    />
                  </a>
                </div>
                <div className="stories-info">
                  <a href="#">
                    <h5>{t("ECG")}</h5>
                  </a>
                  <span>{t("February 20, 2018")}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="footer-thumb">
              <div className="opening-hours">
                <h4 className="wow fadeInUp" data-wow-delay="0.4s">
                  {t("Opening Hours")}
                </h4>
                <p>
                  {t("Sunday - Thurdsay ")}
                  <span>{t(" 08:00 morning  - 00:00 midnight ")}</span>
                </p>
                <p>
                  {t("Friday - Saturday")}
                  <span>{t("Closed")}</span>
                </p>
              </div>
              <ul className="social-icon">
                <li>
                  <a
                    href="https://web.facebook.com/%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9-%D9%84%D8%B7%D8%B1%D8%B4-102156135789996/"
                    className="fa fa-facebook-square"
                    attr="facebook icon"
                  />
                </li>
                <li>
                  <a href="#" className="fa fa-twitter" />
                </li>
                <li>
                  <a href="#" className="fa fa-instagram" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 border-top">
            <div className="col-md-4 col-sm-6">
              <div className="copyright-text">
                <p>
                  {t("developped by ")}
                  <a
                    id="developer"
                    href="https://github.com/abdallahbouhannache"
                    style={{ padding: "0 3px" }}
                  >
                    {t("abdallah-bouhannache")}
                  </a>
                  |{t(" Design: Tooplate")}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="footer-link"></div>
            </div>
            <div className="col-md-2 col-sm-2 text-align-center">
              <div className="angle-up-btn">
                <a
                  href="#top"
                  className="smoothScroll wow fadeInUp"
                  data-wow-delay="1.2s"
                >
                  <i className="fa fa-angle-up" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
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
