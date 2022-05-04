import * as React from "react";
import { Link, graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

import Bio from "../../components/bio";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import SidePan from "../../components/sidepane";
import SearchBar from "../../components/searchbar";
import BlogItem from "../../components/blogItem";
import Paginate from "../../components/pagination";
import Appointement from "../../components/appointement";
import Map from "../../components/map";
// import Comments from "../../components/comments";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  const wrpcontent = {
    // border: "1px solid",
    display: "grid",
    width: "100%",
    height: "100%",
    gridTemplateRows: "auto",
    gridTemplateColumns: " 1fr 1fr 1fr 1fr",
    gridGap: "1.5em",
  };

  const wrp = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  // console.log({ dataindex: data });

  const { t, i18n } = useTranslation(["blog"]);

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle} ns={"blog"}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle} ns={"blog"}>
      {/* <Seo title="All posts" /> */}
      {/* <Bio /> */}
      <div className="container-fluid" style={wrp}>
        <div
          className="contentwrapper container"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <SidePan /> */}
          <div
            className="blogcontent"
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div className="headerblog">
              <SearchBar />
              <h2>{t("Patients Stories")}</h2>
            </div>
            <div className="gridblog" style={wrpcontent}>
              {posts.map((el, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      // border: "1px solid",
                      width: "100%",
                      display: "block",
                      //   height: "200px",
                    }}
                  >
                    {/* <img
                        src="images/product1.jpg"
                        className="img-responsive"
                        alt="imga"
                      />
                      <p style={{ padding: 0, margin: 0 }}>
                        {el} {i}dddd
                      </p> */}
                    <BlogItem data={{ ...el.frontmatter, ...el.fields }} />
                  </div>
                );
              })}
            </div>
            {posts.length > 12 && <Paginate />}
          </div>
        </div>
      </div>

      {/* <ol style={{ listStyle: `none` }}>
        {posts.map((post) => {
          const title = post.frontmatter.title || post.fields.slug;
          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  0000000000000000000000000000
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          );
        })}
      </ol> */}
      <Map />
      <Appointement />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["blog"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          category
          excerpt
          image
          pubdate(formatString: "MMMM DD, YYYY")
          expdate(formatString: "MMMM DD, YYYY")
          description
        }
      }
    }
  }
`;

// export const query = graphql`
//   query ($language: String!) {
//     locales: allLocale(
//       filter: { ns: { in: ["app"] }, language: { eq: $language } }
//     ) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `;
