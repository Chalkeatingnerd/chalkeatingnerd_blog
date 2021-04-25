import React from 'react';
import { graphql } from 'gatsby';
import './blogTemplate1.scss';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post-articles" onClick={_ => window.location.href='/'}>
        <span>
          All Articles
        </span>
      </div>
      <div className="blog-post">
        <h1 className="blog-post__title">{frontmatter.title}</h1>
        <small className="blog-post__date">({frontmatter.date})</small>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="blog-post-footer">
        <hr/>
      </div>
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`