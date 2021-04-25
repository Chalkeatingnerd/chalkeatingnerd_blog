import React from 'react';
import DarkModeToggler from '../dark-mode-theme';
import { graphql, useStaticQuery } from 'gatsby';
import './content.scss';

const postListQuery = graphql`
  query pageQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            template
            title
            slug
            date
            thumbnail
            hash
          }
        }
      }
    }
  }
`

const Content = () => {
  const data = useStaticQuery(postListQuery);
  const { allMarkdownRemark } = data;
  const { edges } = allMarkdownRemark;
  
  const createBox = ({date, title, slug, description, hash}) => {
    return (
      <div className="content__box box" key={title} onClick={_ => window.location.href=slug}>
        <div className="content__box-date">{date}</div>
        <div className="content__box-title">{title}</div>
        <div className="content__box-desc">
          {description}
        </div>
        <div className="content__box-hash">{hash}</div>
      </div>
    )
  }
  return (
    <div className="content">
      <div className="content__menu">
        <div className="content__menu__hash">
          hash code 
        </div>
        <div className="content__menu__dark-mode">
          <DarkModeToggler/>
        </div>
      </div>
      <div className="content__post-list">
        {edges.map(x => createBox(x.node.frontmatter))}
      </div>
      <div className="content__nav">
        <div className="content__nav-prev">
          <div className="content__nav-button">
            {'< previous'}
          </div>
        </div>
        <div className="content__nav-next">
          <div className="content__nav-button">
            {'next >'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;
