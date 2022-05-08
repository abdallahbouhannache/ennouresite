import React, { useContext, useEffect, useState } from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { Link, graphql } from "gatsby";
import $ from "jquery";

import Services from "../components/services";
import Spinner from "../components/spinner";
window.jquery = $;

export default function Team() {
  {
    /* <!-- TEAM --> */
  }
  const { t, i18n } = useTranslation();
  // const [state, setstate] = useState({
  //   visibile: 2,
  //   ind: 0,
  // });
  var items = null,
    startpost = 0,
    visibile = 3,
    ind = 0,
    animationObj = [{}, {}],
    wd = 200,
    lmax = wd * 3,
    rmax = wd * 3,
    rg = 0,
    lg = 0,
    endInx = 0;
  // endInx = Math.round(items.length / visibile) - 1;

  const resizer = () => {
    wd = $(".service").width();
    ind = 0;
    visibile = 1;
    if (window.innerWidth < 768) {
      $(".service").each(function (e, k) {
        $(this).css("marginLeft", 100 * e + "%");
      });
      animationObj = [
        { marginLeft: `-=${window.innerWidth}px` },
        { marginLeft: `+=${window.innerWidth}px` },
      ];
    } else {
      $(".service").each(function (e, k) {
        $(this).css("marginLeft", 0);
      });
      animationObj = [{ left: "-=" + wd }, { left: "+=" + wd }];
    }
    endInx = 500;
    lmax = wd * 3.5;
    rmax = wd * 3.5;
  };

  useEffect(() => {
    // items = $(".service");
    // wd = $(".service").width();
    // startpost = $(".service").offset()["left"];
    // ind = 0;
    // visibile = 1;

    items = $(".service");
    endInx = Math.round(items.length / visibile) - 1;

    resizer();
    $(window).on("resize", (e) => {
      resizer();
    });
      
  }, []);

  // const context = useContext(contextValue)
  // var items = $(".service"),
  // visibile = 2,
  // ind = 0,
  // endInx = Math.round(items.length / visibile) - 1;
  // endInx = Math.round(items.length / visibile) - 1;

  const slidemover = (e) => {
    // && ind < endInx
    let forward = e.target.classList.contains("next");
    //console.log(animationObj);
    if (forward) {
      // $(this).offset().top - 49
      // setstate({ ...state, ind: ind + 1 });
      rg = $(".service:last-child").offset().left;
      //console.log(rg);
      //console.log(rmax);
      if (rg > rmax) {
        $(".service").animate(animationObj[0], 1200);
      }
      ind = ind + 1;
      // //console.log("forward" + "+" + ind);
    } else {
      // //console.log("rewind" + "-" + ind);
      if (!forward) {
        // ind > 0 &&
        ind = ind - 1;
        lg = $(".service:first-child").offset().left;
        //console.log(lg);
        //console.log(lmax);
        if (lg < 0) {
          $(".service").animate(animationObj[1], 1200);
        }
        // setstate({ ...state, ind: ind - 1 });
      }
    }
  };

  const showServices = (e) => {
    $(".teampreloader").fadeIn(500);
    if (e.target.localName == "h2") {
      $(".rowwrapper").fadeIn();
      $(".detailServices").fadeOut();
    } else {
      $(".rowwrapper").fadeOut();
      $(".detailServices").fadeIn();
    }
    $(".teampreloader").fadeOut(2000);
  };

  const servicesdata = {
    item: {
      title: t(`follow up health care`),
      img: "/images/romdesoin2.jpg",
      details: [
        t(`Follow-up of chronic diseases (diabetes, blood
        pressure...)`),
        t(`Treatment room, changing dressings, needles, etc ...`),
      ],
    },
    item1: {
      title: t(`Medical urgery`),
      img: "/images/romdesoin2.jpg",
      details: [
        t(`Follow-up of chronic diseases (diabetes, blood
        pressure...)`),
        t(`Treatment room, changing dressings, needles, etc ...`),
      ],
    },
    item2: {
      title: t(`Radiology`),
      img: "/images/romdesoin2.jpg",
      details: [t(`Echography`), t(`ECG`)],
    },
    item3: {
      title: t(`Radiology`),
      img: "/images/romdesoin.jpg",
      details: [t(`blood pressure monitoring`), t(`glcemy`)],
    },
  };

  // const servicestyle = {
  //   left: "calc(100% - 10)",
  // };

  return (
    <section id="team" data-stellar-background-ratio={1}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="about-info">
              <h2
                className="wow fadeInUp ourSrvs"
                data-wow-delay="0.1s"
                onClick={showServices}
              >
                {t(`Our Services`)}
              </h2>
            </div>
          </div>
          <div className="clearfix" />
          <Spinner classe={"teampreloader"} />
          <div className="row rowwrapper">
            <i
              className="fa fa-arrow-left btn servicebtn next"
              onClick={slidemover}
            ></i>
            <div className="serviceslist">
              {Object.entries(servicesdata).map(([key, value]) => {
                return (
                  <div className="service" key={key} onClick={showServices}>
                    <div
                      className="team-thumb wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <img
                        src={value.img || "/images/romdesoin2.jpg"}
                        className="img-responsive"
                        alt="imga"
                      />
                      <div className="team-info">
                        <h3>{value.title}</h3>
                        <ul>
                          {Object.entries(value.details).map(([k, v]) => (
                            <li key={k}>{v}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <i
              className="fa fa-arrow-right btn servicebtn rewind"
              onClick={slidemover}
            ></i>
          </div>
        </div>
      </div>
      <Services />
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
