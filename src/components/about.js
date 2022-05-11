import React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next";

export default function About() {
  {
    /* <!-- ABOUT --> */
  }
  const color = {
    color: "#fff",
  };
  const txtshadow = {
    textShadow: " 0px 0px 10px black",
  };
  // const { t, i18n } = useTranslation();
  const { t, language } = useI18next();

  const content = {
    welcome: t("Welcome to Your Health Care Clinique"),
    desc: t(
      `Medical urgency,General medical examinations (women, men, children)`
    ),
    desctwo: t(
      `providing Follow-up of chronic diseases, diabetes, blood pressure......`
    ),
    descthree: t(`Echographie and ECG
    with Treatment room (change of bandages, needles....).`),
  };

  return (
    <section id="about">
      <div id="bg-about"></div>
      <div className="container-fluid">
        <div className="row " style={{ height: "100%" }}>
          <div
            className="col-lg-12 col-md-12 col-sm-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div className="about-info">
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.6s"
                style={{ ...color, ...txtshadow, fontSize: " 3em" }}
              >
                {content.welcome}
              </h2>
              <div className="wow fadeInUp" data-wow-delay="0.8s">
                <p style={color}>{content.desc}</p>
                <p style={color}>{content.desctwo}</p>
                <p style={color}>{content.descthree}</p>
              </div>
              <figure className="profile wow fadeInUp" data-wow-delay="1s">
                <img
                  src="/images/author-image.jpg"
                  className="img-responsive"
                  alt="picture"
                />
                <figcaption>
                  <h3 style={{ ...color, ...txtshadow }}>
                    {t("Dr.Latreche Badis")}
                  </h3>
                  <p style={color}>{t("General Principal")}</p>
                </figcaption>
              </figure>
              <div className="profile wow fadeInUp staff" data-wow-delay="1.5s">
                <p style={{ ...color, margin: 0, padding: 0 }}>
                  {t("with a staff of :")}{" "}
                </p>
                <div className="stafflist d-flex">
                  <div className="staffmember ">
                    <h6
                      style={{
                        ...color,
                        ...txtshadow,
                        margin: "1em 0",
                        padding: 0,
                      }}
                    >
                      {t("Mr. Yasser , A nurse assistant ")}
                    </h6>
                    <p style={{ ...color, width: "55%" }}>
                      {t("an experienced nurse with high work experience")}
                    </p>
                  </div>
                  <div className="staffmember">
                    <h6
                      style={{
                        ...color,
                        ...txtshadow,
                        margin: "1em 0",
                        padding: 0,
                      }}
                    >
                      {t("Reception and Help:")}
                    </h6>
                    <p style={{ ...color, width: "65%" }}>
                      {t("young females for receiving and helping patients")}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className=" wow fadeInUp Timing animated"
                data-wow-delay="1.5s"
                style={language == "ar" ? { left: "2em" } : { right: "4em" }}
                // style={{
                //   flexDirection: "column",
                //   display: "flex",
                //   visibility: "visible",
                //   animationDelay: "1.5s",
                //   animationName: "fadeInUp",
                //   border: "1px solid red",
                //   position: "absolute",
                //   top: "23em",
                //   alignItems: "center",
                //   right: "4em",
                //   justifyContent: "space-around" /* float: 'right', */,
                //   // width: "30em",
                //   padding: "23px",
                //   borderRadius: "50%",
                //   borderWidth: "0.6em",
                //   border: "1px solid #e3e3e342",
                //   boxShadow: " 0px 0px 24px 9px #278370",
                // }}
              >
                <div className="week wow fadeInUp" data-wow-delay="2.5s">
                  <h6
                    style={{
                      color: "rgb(255, 255, 255)",
                      textShadow: "black 0px 0px 10px",
                      margin: "1em 0px",
                      padding: 0,
                    }}
                  >
                    SUNDAY - THURSDAY
                  </h6>
                  <h6
                    style={{
                      color: "rgb(255, 255, 255)",
                      textShadow: "black 0px 0px 10px",
                      margin: "1em 0px",
                      padding: 0,
                    }}
                  >
                    8:00 AM - 12:00 PM
                  </h6>
                </div>
                <div className="weekend wow fadeInUp" data-wow-delay="3.5s">
                  <h6
                    style={{
                      color: "rgb(255, 255, 255)",
                      textShadow: "black 0px 0px 10px",
                      margin: "1em 0px",
                      padding: 0,
                    }}
                  >
                    FRIDAY - SATURDAY
                  </h6>
                  <h6
                    style={{
                      color: "rgb(255, 255, 255)",
                      textShadow: "black 0px 0px 10px",
                      margin: "1em 0px",
                      padding: 0,
                    }}
                  >
                    4:00 PM - 12:00 PM
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
