import React from "react";

export default function About() {
  {
    /* <!-- ABOUT --> */
  }

  const color={
    color:"#fff",
  }
  const txtshadow={
    textShadow:" 0px 0px 10px black",
  }

  return (
    <section id="about">
      <div id="bg-about"></div>
      <div className="container-fluid">
        <div className="row "  style={{height:'100%'}}>
          <div className="col-lg-12 col-md-12 col-sm-12" style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}>
            <div className="about-info"  >
              <h2 className="wow fadeInUp" data-wow-delay="0.6s"  style={{...color,...txtshadow,fontSize:" 3em",}}>
                Welcome to Your Health Care Clinique
                 <i className="fa fa-h-square" />
              </h2>
              <div className="wow fadeInUp" data-wow-delay="0.8s"  >
                <p style={color}>
                  Aenean luctus lobortis tellus, vel ornare enim molestie
                  condimentum. Curabitur lacinia nisi vitae velit volutpat
                  venenatis.
                </p>
                <p style={color}>
                  Sed a dignissim lacus. Quisque fermentum est non orci commodo,
                  a luctus urna mattis. Ut placerat, diam a tempus vehicula.
                </p>
              </div>
              <figure className="profile wow fadeInUp" data-wow-delay="1s"  >
                <img
                  src="images/author-image.jpg"
                  className="img-responsive"
                  alt="picture"
                />
                <figcaption>
                  <h3 style={{...color,...txtshadow}} >Dr. Latreche Badis</h3>
                  <p style={color} >General Principal</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
