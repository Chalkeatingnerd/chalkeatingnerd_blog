import React from 'react';
import DarkModeToggler from '../dark-mode-theme';
import { graphql } from 'gatsby';
import './content.scss';

const Content = ({data}) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark
  const createBox = () => {
    return (
      <div className="content__box box">
        <div className="content__box-date">APRIL 2021</div>
        <div className="content__box-title">Title</div>
        <div className="content__box-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas esse autem necessitatibus voluptates, distinctio consequatur ipsum minus, obcaecati quae provident tenetur cum optio. Laborum possimus dignissimos deserunt repellendus, porro ipsam.
        </div>
        <div className="content__box-hash">#algorithm #react</div>
      </div>
    )
  }
  return (
    <div className="content">
      <div className="content__menu">
        <div className="content__menu__hash">
          #node #algorithm
        </div>
        <div className="content__menu__dark-mode">
          <DarkModeToggler/>
        </div>
      </div>
      <div className="content__post-list">
        {createBox()}
        {createBox()}
        {createBox()}
        {createBox()}
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