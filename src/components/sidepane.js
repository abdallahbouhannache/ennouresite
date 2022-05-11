import React from "react";
import "../../public/css/sidepan.css";

function SidePan() {
  // <link
  //   href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
  //   rel="stylesheet"
  //   id="bootstrap-css"
  // />
  return (
    <aside
      id="sidebar"
      className="sidebar sidebar-default open"
      role="navigation"
    >
      {/* Material sidebar */}
      {/* Overlay for fixed sidebar
      <div className="sidebar-overlay" /> */}
      {/* Sidebar header */}
      <div
        className="sidebar-header header-cover"
        style={{
          backgroundImage:
            "url(http://2.bp.blogspot.com/-2RewSLZUzRg/U-9o6SD4M6I/AAAAAAAADIE/voax99AbRx0/s1600/14%2B-%2B1%2B%281%29.jpg)",
        }}
      >
        {/* Top bar */}
        <div className="top-bar" />
        {/* Sidebar toggle button */}
        <button type="button" className="sidebar-toggle">
          <i className="icon-material-sidebar-arrow" />
        </button>
        {/* Sidebar brand image */}
        <div className="sidebar-image">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg" />
        </div>
        {/* Sidebar brand name */}
        <a
          data-toggle="dropdown"
          className="sidebar-brand"
          href="#settings-dropdown"
        >
          john.doe@gmail.com
          <b className="caret" />
        </a>
      </div>
      {/* Sidebar navigation */}
      <ul className="nav sidebar-nav">
        <li className="dropdown">
          <ul id="settings-dropdown" className="dropdown-menu">
            <li>
              <a href="#" tabIndex={-1}>
                Profile
              </a>
            </li>
            <li>
              <a href="#" tabIndex={-1}>
                Settings
              </a>
            </li>
            <li>
              <a href="#" tabIndex={-1}>
                Help
              </a>
            </li>
            <li>
              <a href="#" tabIndex={-1}>
                Exit
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="sidebar-icon md-inbox" />
            Inbox
          </a>
        </li>
        <li>
          <a href="#">
            <i className="sidebar-icon md-star" />
            Starred
          </a>
        </li>
        <li>
          <a href="#">
            <i className="sidebar-icon md-send" />
            Sent Mail
          </a>
        </li>
        <li>
          <a href="#">
            <i className="sidebar-icon md-drafts" />
            Drafts
          </a>
        </li>
        <li className="divider" />
        <li className="dropdown">
          <a
            className="ripple-effect dropdown-toggle"
            href="#"
            data-toggle="dropdown"
          >
            All Mail
            <b className="caret" />
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#" tabIndex={-1}>
                Social
                <span className="sidebar-badge">12</span>
              </a>
            </li>
            <li>
              <a href="#" tabIndex={-1}>
                Promo
                <span className="sidebar-badge">0</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            Trash
            <span className="sidebar-badge">3</span>
          </a>
        </li>
        <li>
          <a href="#">
            Spam
            <span className="sidebar-badge">456</span>
          </a>
        </li>
        <li>
          <a href="#">
            Follow Up
            <span className="sidebar-badge badge-circle">i</span>
          </a>
        </li>
      </ul>
      {/* Sidebar divider */}
      {/* <div class="sidebar-divider"></div> */}
      {/* Sidebar text */}
      {/*  <div class="sidebar-text">Text</div> */}
    </aside>
  );
}

export default SidePan;
