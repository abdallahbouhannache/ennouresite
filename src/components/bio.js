/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const Bio = () => {
  const { t, i18n } = useTranslation(["app", "blog"]);

  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow them on Twitter
          </a>
        </p>
      )}
      <div className="copyright-text">
        <p>
          {t("developped by ")}
          <a
            id="developer"
            href="https://github.com/abdallahbouhannache"
            style={{ padding: "0 3px" }}
          >
            {t("abdallah-bouhannache")}
          </a>
          |{t(" Design: Tooplate")}
        </p>
      </div>
    </div>
  );
};

export default Bio;
