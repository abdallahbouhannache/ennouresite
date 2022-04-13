import { Link, useI18next } from "gatsby-plugin-react-i18next";

import { graphql } from "gatsby";

import React from "react";

const Switcher = ({ title }) => {
  const { languages, changeLanguage } = useI18next();

  const getLang = () => {
    $(".languages").fadeToggle(300);
    // $(".languages-switcher").on("click", (e) => {
    // });
  };
  const imgstyle = {
    border: "1px solid #38353547",
    borderRadius: "50%",
  };
  return (
    <div className="lang-switcher">
      {/* <h1 style={{ margin: 0 }}></h1> */}
      <Link
        className="languages-switcher btn btn-secondary dropdown-toggle "
        href="#"
        role="button"
        id="languagesBar"
        data-bs-toggle="dropdown"
        aria-expanded="true"
        to="/"
        onClick={getLang}
      >
        {/* {title}00 */}
        <img
          width="20"
          src="/images/lang/EN.svg"
          alt={title}
          style={imgstyle}
        />
      </Link>
      <ul
        className="languages bg-dark dropdown-menu "
        aria-labelledby="languagesBar"
        data-popper-placement="bottom-start"
      >
        {languages.map((lng) => (
          <li>
            <a
              key={lng}
              className="dropdown-item"
              href="/"
              onClick={() => {
                getLang();
                changeLanguage(lng);
              }}
            >
              <img
                width="20"
                src={`/images/lang/${lng}.svg`}
                alt={lng}
                style={imgstyle}
              />
              {/* {lng} */}
            </a>
          </li>
        ))}
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
