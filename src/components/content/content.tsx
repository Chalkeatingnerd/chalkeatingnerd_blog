import React, {useEffect} from 'react';
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
`;

const Content = ({location}) => {
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
        <div className="content__box-hash">{hash.map(x => `#${x} `)}</div>
      </div>
    )
  }
  const getHashTagsFromPath = () => {
    const params = location.search;
    if(!params) return;
    const hashTagParam = params.split('&').filter(x => /^\??hash_tag$/.test(x.split('=')[0]));
    if(!hashTagParam.length) return;
    const hashTags = hashTagParam[0].split('=');
    if(!hashTags) return;
    const encodedHashTags = decodeURI(hashTags[1]);
    return encodedHashTags.split(' ');
  }
  const createHashTagsBox = (arr: string[]) => {
    console.log(arr);
    return arr.reduce((prev, cur) => prev + `<a href="./?hash_tag=${cur}" style="margin-right: 1rem">#${cur}</a>`, '');
  }
  const filtertedContent = () => {
    return edges.map(x => createBox(x.node.frontmatter));
  }
  useEffect(() => {
    setTimeout(() => {
      const arr = getHashTagsFromPath();
      const hashTitle = document.querySelector('.content__menu__hash');
      hashTitle.innerHTML = createHashTagsBox(arr);

    }, 500)
  }, [])
  return (
    <div className="content">
      <div className="content__menu">
        <div className="content__menu__hash">
          
        </div>
        <div className="content__menu__dark-mode">
          <DarkModeToggler/>
        </div>
      </div>
      <div className="content__post-list">
        {filtertedContent()}
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
