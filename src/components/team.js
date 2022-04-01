import React from "react";

export default function Team() {
  {
    /* <!-- TEAM --> */
  }
  return (
    <section id="team" data-stellar-background-ratio={1} >
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="about-info">
              <h2 className="wow fadeInUp" data-wow-delay="0.1s">
                Our Services
              </h2>
            </div>
          </div>
          <div className="clearfix" />
          <div className="row rowwrapper">
          <div className="col-lg-4 col-md-4 col-sm-5 col-xs-8">
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
          <div className="col-lg-4 col-md-4 col-sm-5 col-xs-8">
            <div className="team-thumb wow fadeInUp" data-wow-delay="0.4s">
              <img
                src="images/romdr.jpg"
                className="img-responsive"
                alt="imga"
              />
              <div className="team-info">
                <h3>Medical Examinations</h3>
                <ul>
                  <li>Follow-up of chronic diseases (diabetes, blood pressure...)</li>
                  <li>Treatment room, changing dressings, needles, etc ...</li>
                </ul>              
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-5 col-xs-8">
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
        </div>
      </div>
    </section>
  );
}
