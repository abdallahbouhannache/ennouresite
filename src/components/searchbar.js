import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

export default function SearchBar() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className=""
      style={{
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div className="row" style={{ width: "100%" }}>
        <div className="col-xs-8 col-xs-offset-2">
          <div className="input-group">
            {/* <div className="input-group-btn search-panel">
              <button
                type="button"
                className="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
              >
                <span id="search_concept">Filter by</span>{" "}
                <span className="caret" />
              </button>
              <ul className="dropdown-menu" role="menu">
                <li>
                  <a href="#contains">Contains</a>
                </li>
                <li>
                  <a href="#its_equal">It's equal</a>
                </li>
                <li>
                  <a href="#greather_than">Greather than &gt;</a>
                </li>
                <li>
                  <a href="#less_than">Less than &lt; </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="#all">Anything</a>
                </li>
              </ul>
            </div> */}
            <input
              type="hidden"
              name="search_param"
              defaultValue="all"
              id="search_param"
            />
            <input
              type="text"
              className="form-control"
              name="x"
              placeholder={t("Search term...")}
            />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">
                <span className="fa fa-search" />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
