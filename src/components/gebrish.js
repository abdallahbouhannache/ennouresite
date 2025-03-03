<main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>



    {/* <Helmet>
        <script src={withPrefix('js/jquery.js')} type="text/javascript" async defer/>
        <script src={withPrefix('js/bootstrap.min.js')} type="text/javascript" async defer />
        <script src={withPrefix('js/jquery.sticky.js')} type="text/javascript" async defer />
        <script src={withPrefix('js/jquery.stellar.min.js')} type="text/javascript" async defer />
        <script src={withPrefix('js/wow.min.js')} type="text/javascript" async defer />
        <script src={withPrefix('js/smoothscroll.js')} type="text/javascript" async defer />
        <script src={withPrefix('js/owl.carousel.min.js')} type="text/javascript" async defer />
        <script src={withPrefix('js/custom.js')} type="text/javascript" async defer />
</Helmet> */}
{/* <script src={withPrefix('js/jquery.min.js')} type="text/javascript" defer={true} /> */}

import jquery from "jquery"

{/* <title>Home Page</title> 
    // style={pageStyles} body
    // id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50"
    */}


    <Helmet>
        <link href={withPrefix('css/bootstrap.min.css')}  rel="stylesheet"  type="text/css"  />
        <link href={withPrefix('css/font-awesome.min.css')}  rel="stylesheet"  type="text/css"  /> 
        <link href={withPrefix('css/animate.css')}  rel="stylesheet"  type="text/css"  />
        <link href={withPrefix('css/owl.carousel.css')}  rel="stylesheet"  type="text/css"  />
        <link href={withPrefix('css/owl.theme.default.min.css')}  rel="stylesheet"  type="text/css"  /> 
        <link href={withPrefix('css/tooplate-style.css')}  rel="stylesheet"  type="text/css"  /> 
        
</Helmet>


import * as React from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"





// import "./public/js/jquery.js"
// import "./public/js/bootstrap.min.js"
// import "./public/js/jquery.sticky.js'"
// import "./public/js/jquery.stellar.min.js"
// require("./public/js/wow.min.js")
// import "./public/js/smoothscroll.js"
// import "./public/js/owl.carousel.min.js"
// import "./public/js/custom.js"

{/* <Helmet>
<link href={withPrefix('css/bootstrap.min.css')}  rel="stylesheet"  type="text/css"  />
<link href={withPrefix('css/font-awesome.min.css')}  rel="stylesheet"  type="text/css"  /> 
<link href={withPrefix('css/animate.css')}  rel="stylesheet"  type="text/css"  />
<link href={withPrefix('css/owl.carousel.css')}  rel="stylesheet"  type="text/css"  />
<link href={withPrefix('css/owl.theme.default.min.css')}  rel="stylesheet"  type="text/css"  /> 
</Helmet> */}

// import  "./bootstrap.min.css"
// import "../css/font-awesome.min.css"
// import "../css/animate.css"
// import "../css/owl.carousel.css"
// import "../css/owl.theme.default.min.css"
