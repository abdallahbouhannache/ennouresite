import * as React from "react";
import { Link, graphql } from "gatsby";
import GatsbyLink from "gatsby-link";


// import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Comments from "../components/comments";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;


  const paragst = { textAlign: "justify" };

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <section
        id="primary"
        className="content-full-width container"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <article
          id="post-6200"
          className="blog-single col-md"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "500px",
          }}
        >
          <hr />
          <h2
            style={{
              color: "#30e567",
              textShadow: "1px 1px 3px  #000000f0",
              textAlign: "center",
              textTransform: "capitalize",
              letterSpacing:"1vw",
            }}
          >
            {post.frontmatter.title}
          </h2>
          <div
            className="entry-top-meta-group"
            style={{
              justifyContent: "space-between",
              display: "flex",
              padding: "5px 15px",
              fontSize: "1.2em"
            }}
          >
            {/* Entry Author */}
            <div className="entry-author">
              <i className="fas fa-user"> </i>
              <GatsbyLink to={post.slug}>
                {post.frontmatter.category || "uncategorized"}
              </GatsbyLink>
            </div>
            {/* Entry Author */}
            {/* Entry Date */}
            <div className="entry-date text-right">
              <i className="fas fa-calendar"> </i>
              {post.frontmatter.pubdate || "january 01, 2001"}
            </div>
            {/* Entry Date */}
          </div>
          <div className="entry-thumb single-preview-img">
            <div className="blog-image">
              <img
                className="attachment-full size-full wp-post-image"
                src={"/images/" + (post.frontmatter.image || "default.jpg")}
                height={300}
                style={{ width: "100%" }}
                alt
                // srcSet=""
                // sizes="(max-width: 1230px) 100vw, 1230px"
              />
            </div>

            <div
              className="timeline"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "5px 15px",
                fontSize: "1.2em"
              }}
            >
              {/* Entry Date */}
              {/* <div className="entry-date">
                <i className="fas fa-folder"> </i>
                <a
                  href="http://dermaclinic-algerie.com/category/uncategorized/"
                  rel="category tag"
                >
                  Uncategorized
                </a>
              </div> */}
              {/* Entry Date */}
              {/* Entry Comment */}
              <div className="entry-comments">
                {post.frontmatter.expdate || "january 01, 2001"}
                {/* <a href="http://dermaclinic-algerie.com/autam-nuella-natae/#respond">
                  <i className="fas fa-comment"> </i>
                </a> */}
              </div>
            </div>
            {/* Entry Comment */}
          </div>
          <hr />
          <div
            className="wpb_text_column wpb_content_element  vc_custom_1560412238443 custom-link-size"
            style={{ fontSize: 18, lineHeight: 36, color: "#050505" }}
          >
            <div className="wpb_wrapper">
              <p>
                
                {post.frontmatter.excerpt}
                {/* <em>
                  <a href="#"> meaningful connections</a>
                </em> */}
              </p>
            </div>
          </div>
          <hr />
          <div className="wpb_text_column wpb_content_element  vc_custom_1560407641234">
            <div className="wpb_wrapper">
              <p>{post.frontmatter.description}</p>
            </div>
          </div>

          <div className="row">
            <nav className="blog-post-nav">
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>

          <section className="commententries rounded">
            <div id="comments" className="comments-area">
              <div
                id="respond"
                className="comment-respond"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3 id="reply-title" className="comment-reply-title">
                  Leave a Comment
                </h3>
                <form
                  action="http://dermaclinic-algerie.com/wp-comments-post.php"
                  method="post"
                  id="commentform"
                  className="comment-form form"
                  noValidate
               
                >
                  <div className="comment-notes form-group">
                    <span id="email-notes">
                      Votre adresse e-mail ne sera pas publiée.
                    </span>
                    <span className="required-field-message" aria-hidden="true">
                      Les champs obligatoires sont indiqués avec
                      <span className="required" aria-hidden="true">
                        *
                      </span>
                    </span>
                  </div>
                  <div className="comment-form-comment form-group">
                    <label htmlFor="comment" className="control-label">
                      Commentaire
                      <span className="required" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      className="form-control"
                      cols={45}
                      rows={3}
                      maxLength={65525}
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="comment-form-author form-group">
                    <label htmlFor="author" className="control-label">
                      Nom
                      <span className="required" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="author"
                      name="author"
                      type="text"
                      className="form-control"
                      size={30}
                      maxLength={245}
                      required
                    />
                  </div>
                  <div className="comment-form-email form-group">
                    <label htmlFor="email" className="control-label">
                      E-mail
                      <span className="required" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      size={30}
                      maxLength={100}
                      aria-describedby="email-notes"
                      required
                    />
                  </div>
                  <div className="form-submit form-group" >
                    <input
                      name="submit"
                      type="submit"
                      id="submit"
                      className="submit form-control"
                    />
                    <input
                      type="hidden"
                      name="comment_post_ID"
                      defaultValue={6200}
                      id="comment_post_ID"
                      className="form-control"
                    />
                    <input
                      type="hidden"
                      name="comment_parent"
                      id="comment_parent"
                      defaultValue={0}
                      className="form-control"
                    />
                  </div>
                </form>
              </div>
              {/* #respond */}
            </div>
            {/* .comments-area */}
          </section>
        </article>
      </section>

      {/* <Comments /> */}
      
      {/* 
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <hr />
          <footer>
          </footer>
        </article>
      */}
      {/*
      
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> 
      */}
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image
        pubdate
        expdate
        excerpt
        description
        category
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
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