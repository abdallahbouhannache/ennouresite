import GatsbyLink from "gatsby-link";
import React from "react";

function blogItem({ data }) {
  console.log({ data: data });
  // if (Object.keys(data).length) {
  // }
  return (
    <div
      className=""
      style={{ position: "relative", left: "0", top: 0, width: "250px" }}
    >
      <article id="post-6201" className="blog-entry ">
        <div className="entry-thumb">
          <GatsbyLink to={data.slug}>
            <img
              src={"/images/" + (data.image || "default.jpg")}
              className="attachment-meni-blog-iii-column size-meni-blog-iii-column wp-post-image"
              loading="lazy"
              style={{ width: "100%" }}
              height={180}
              alt={"img"}
            />
          </GatsbyLink>
        </div>
        {/* Featured Image */}
        {/* Entry Date */}
        <div className="entry-date text-right">
          <i className="pe-icon pe-date"> </i>
          {data.expdate || "january 01, 2001"}
        </div>
        {/* Entry Date */}
        {/* Entry Title */}
        <div
          className="entry-title"
          style={{
            overflow: "hidden",
            width: "250px",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          <a href={data.slug} title={data.title}>
            <h4 style={{marginTop:'1em'}}>{data.title}</h4>
          </a>
        </div>
        {/* Entry Title */}
        <div
          className="entry-body"
          style={{
            height: "120px",
            overflowY: "hidden",
          }}
        >
          <p>{data.excerpt || "...."}</p>
        </div>
        {/* Entry Button */}
      </article>
    </div>
  );
}

export default blogItem;
