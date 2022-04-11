import React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

export default function Home() {
  {
    /* <!-- HOME --> */
  }
  const { t } = useTranslation();

  return (
    <section id="home" className="slider" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="owl-carousel owl-theme">
            <div className="item item-first">
              <div className="caption">
                <div className="col-md-offset-1 col-md-10">
                  <h1>{t("Healthy Living")}</h1>
                  <h3>{t("Let's make your life happier")}</h3>
                  {/* <a
                    href="#team"
                    className="section-btn btn btn-default smoothScroll"
                  >
                    Meet Our Doctors
                  </a> */}
                </div>
              </div>
            </div>
            <div className="item item-second">
              <div className="caption">
                <div className="col-md-offset-1 col-md-10">
                  <h1>{t("New Lifestyle")}</h1>
                  <h3>{t("Aenean luctus lobortis tellus")}</h3>
                  {/* <a
                    href="#about"
                    className="section-btn btn btn-default btn-gray smoothScroll"
                  >
                    More About Us
                  </a> */}
                </div>
              </div>
            </div>
            <div className="item item-third">
              <div className="caption">
                <div className="col-md-offset-1 col-md-10">
                  <h1>{t("Your Health Benefits")}</h1>
                  <h3>{t("Pellentesque nec libero nisi")}</h3>
                  {/* <a
                    href="#news"
                    className="section-btn btn btn-default btn-blue smoothScroll"
                  >
                    Read Stories
                  </a> */}
                </div>
              </div>
            </div>
            <div className="item item-fourth">
              <div className="caption">
                <div className="col-md-offset-1 col-md-10">
                  <h1>{t("Your Health Benefits")}</h1>
                  <h3>{t("Pellentesque nec libero nisi")}</h3>
                  {/* <a
                    href="#news"
                    className="section-btn btn btn-default btn-blue smoothScroll"
                  >
                    Read Stories
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
