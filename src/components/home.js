import React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

export default function Home() {
  {
    /* <!-- HOME --> */
  }
  const { t, i18n } = useTranslation();
  const stories = {
    first: {
      title: t("Healthy Living"),
      descparagraph: t("Let's make your life happier"),
      img: "../images/waiting.jpg",
    },
    second: {
      title: t("Healthy Living"),
      descparagraph: t("Let's make your life happier"),
      img: "../images/visiteroom.jpg",
    },
    third: {
      title: t("Healthy Living"),
      descparagraph: t("Let's make your life happier"),
      img: "../images/romdesoin.jpg",
    },
    fourth: {
      title: t("Healthy Living"),
      descparagraph: t("Let's make your life happier"),
      img: "../images/ecg.jpg",
    },
  };

  return (
    <section id="home" className="slider" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="owl-carousel owl-theme">
            {Object.entries(stories).map(([key, value]) => {
              return (
                <div
                  className="item"
                  key={key}
                  style={{ backgroundImage: `url(${value.img})` }}
                >
                  <div className="caption">
                    <div className="col-md-offset-1 col-md-10">
                      <h1>{value.title}</h1>
                      <h3>{value.descparagraph}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
