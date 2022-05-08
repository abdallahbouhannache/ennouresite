import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import React, { useState } from "react";

const Switcher = ({ title }) => {
  const { languages, changeLanguage, language } = useI18next();
  // const [state, setstate] = useState({ curimglang: "/images/lang/EN.svg" });

  // const getLang = (lng = null) => {
  //   $(".languages").fadeToggle(300);
  // setTimeout(() => {
  //   $(".languages").fadeOut(300);
  //   console.log('timeout')
  // }, 5000);
  // console.log({'lng':lng})
  // if (lng) {
  //   console.log(lng)
  //   setstate({ curimglang: `/images/lang/${lng}.svg` });
  // }
  // $(".languages-switcher").on("click", (e) => {
  // });
  // };

  const imgstyle = {
    border: "1px solid #38353547",
    borderRadius: "50%",
  };

  return (
    <div className="lang-switcher">
      {/* <h1 style={{ margin: 0 }}></h1> */}
      <button
        style={{ background: "none" }}
        className="languages-switcher btn  dropdown-toggle "
        role="button"
        id="languagesBar"
        data-bs-toggle="dropdown"
        aria-expanded="true"
        href="#"
        // onClick={() => getLang()}
      >
        {/* {title}00 */}
        <img
          className="swlang"
          width="20"
          src={`/images/lang/${language}.svg`}
          alt={title}
          style={imgstyle}
        />
      </button>
      <ul
        style={{ top: "50%" }}
        className="languages bg-dark dropdown-menu"
        aria-labelledby="languagesBar"
        data-popper-placement="bottom-start"
      >
        {languages.map((lng, ind) => {
          if (lng != language) {
            return (
              <li key={ind}>
                <a
                  // href={window.location.href.includes("blog") ? `/${lng}/blog` : `/${lng}/` }
                  className="dropdown-item"
                  onClick={(e) => {
                    // getLang(lng);
                    changeLanguage(lng);
                  }}
                >
                  <img
                    width="20"
                    src={`/images/lang/${lng}.svg`}
                    alt={lng}
                    style={imgstyle}
                  />
                </a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Switcher;

{
  /*
  style="z-index: 9999; position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(858px, 54px);"
  <ul class="bg-dark dropdown-menu show" style="z-index: 9999; position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(858px, 54px);" aria-labelledby="languagesBar" data-popper-placement="bottom-start">
<a class="dropdown-item" href="/i18n_switcher/ar/"><img width="20" src="/static/languages/AR.svg" alt="Arabic"></a>
<a class="dropdown-item" href="/i18n_switcher/fr/"><img width="20" src="/static/languages/FR.svg" alt="French"></a>
<a class="dropdown-item" href="/i18n_switcher/en/"><img width="20" src="/static/languages/EN.svg" alt="English"></a>
</ul> 
 <a
              key={lng}
              href="/"
              onClick={() => {
                changeLanguage(lng);
              }}
            >
              {lng}
            </a> 
            */
}
