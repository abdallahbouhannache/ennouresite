/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { withPrefix } from "gatsby"
export const onRenderBody = ({setPostBodyComponents,setHeadComponents,setBodyAttributes},pluginOptions) => {

    setHeadComponents([
        <link rel="stylesheet"  href={withPrefix('css/bootstrap.min.css')}     />,
        <link rel="stylesheet"  href={withPrefix('css/font-awesome.min.css')}     />,
        <link rel="stylesheet"  href={withPrefix('css/animate.css')}     />,
        <link rel="stylesheet"  href={withPrefix('css/owl.carousel.css')}     />,
        <link rel="stylesheet"  href={withPrefix('css/owl.theme.default.min.css')}     />,
        <link rel="stylesheet"  href={withPrefix('css/tooplate-style.css')}     />
    ])

    setPostBodyComponents([
        <script src={withPrefix('js/jquery.js')} type="text/javascript"    />,
        <script src={withPrefix('js/bootstrap.min.js')} type="text/javascript"    />,
        <script src={withPrefix('js/jquery.sticky.js')} type="text/javascript"      />,
        <script src={withPrefix('js/jquery.stellar.min.js')} type="text/javascript"     />,
        <script src={withPrefix('js/wow.min.js')} type="text/javascript"     />,
        <script src={withPrefix('js/smoothscroll.js')} type="text/javascript"     />,
        <script src={withPrefix('js/owl.carousel.min.js')} type="text/javascript"     />,
    ])

    setBodyAttributes({
        'id':"top",
        'data-spy':"scroll",
        'data-target':".navbar-collapse",
        'data-offset':"50",
    })
}