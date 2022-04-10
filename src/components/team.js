import React, { useContext, useEffect, useState } from "react";
import Services from "../components/services";
import Spinner from "../components/spinner";

export default function Team() {
  {
    /* <!-- TEAM --> */
  }
  // const [state, setstate] = useState({
  //   visibile: 2,
  //   ind: 0,
  // });
  var items = $(".service"),
    startpost = 0,
    visibile = 3,
    ind = 0,
    animationObj = [{}, {}],
    wd = 200,
    lmax = wd * 3,
    rmax = wd * 3,
    rg = 0,
    lg = 0,
    endInx = Math.round(items.length / visibile) - 1;

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
    console.log("resize called");
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
    console.log(animationObj);
    if (forward) {
      // $(this).offset().top - 49
      // setstate({ ...state, ind: ind + 1 });
      rg = $(".service:last-child").offset().left;
      console.log(rg);
      console.log(rmax);
      if (rg > rmax) {
        $(".service").animate(animationObj[0], 1200);
      }
      ind = ind + 1;
      console.log("forward" + "+" + ind);
    } else {
      console.log("rewind" + "-" + ind);
      if (!forward) {
        // ind > 0 &&
        ind = ind - 1;
        lg = $(".service:first-child").offset().left;
        console.log(lg);
        console.log(lmax);
        if (lg < 0) {
          $(".service").animate(animationObj[1], 1200);
        }
        // setstate({ ...state, ind: ind - 1 });
      }
    }
  };

  const servicestyle = {
    left: "calc(100% - 10)",
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
                Our Services
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
            <div className="serviceslist"  >
              <div className="service  " onClick={showServices} >
                <div className="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                  <img
                    src="images/romdesoin2.jpg"
                    className="img-responsive"
                    alt="imga"
                  />
                  <div className="team-info">
                    <h3>Medical urgery</h3>
                    <ul>
                      <li>*****</li>
                      <li>*****</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="service  " onClick={showServices}  >
                <div className="team-thumb wow fadeInUp" data-wow-delay="0.4s">
                  <img
                    src="images/romdr.jpg"
                    className="img-responsive"
                    alt="imga"
                  />
                  <div className="team-info">
                    <h3>Medical Examinations</h3>
                    <ul>
                      <li>
                        Follow-up of chronic diseases (diabetes, blood
                        pressure...)
                      </li>
                      <li>
                        Treatment room, changing dressings, needles, etc ...
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="service  " onClick={showServices} >
                <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                  <img
                    src="images/romdr2.jpg"
                    className="img-responsive"
                    alt="imga"
                  />
                  <div className="team-info">
                    <h3>Radiology</h3>
                    <ul>
                      <li>Echography</li>
                      <li>ECG</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="service  " onClick={showServices} >
                <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                  <img
                    src="images/romdr2.jpg"
                    className="img-responsive"
                    alt="imga"
                  />
                  <div className="team-info">
                    <h3>Radiology</h3>
                    <ul>
                      <li>Echography</li>
                      <li>ECG</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="service  " onClick={showServices} >
                <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                  <img
                    src="images/romdr2.jpg"
                    className="img-responsive"
                    alt="imga"
                  />
                  <div className="team-info">
                    <h3>Radiology</h3>
                    <ul>
                      <li>Echography</li>
                      <li>ECG</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="service  " onClick={showServices} >
                <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                  <img
                    src="images/romdr2.jpg"
                    className="img-responsive"
                    alt="imga"
                  />
                  <div className="team-info">
                    <h3>Radiology</h3>
                    <ul>
                      <li>Echography</li>
                      <li>ECG</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="service  " onClick={showServices} >
                <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                  <img
                    src="images/romdr2.jpg"
                    className="img-responsive"
                    alt="imga"
                  />
                  <div className="team-info">
                    <h3>Radiology</h3>
                    <ul>
                      <li>Echography</li>
                      <li>ECG</li>
                    </ul>
                  </div>
                </div>
              </div>
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
