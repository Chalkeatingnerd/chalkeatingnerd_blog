import * as React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import DarkModeToggler from '../../components/dark-mode-theme';
import '../style/global.scss';
import './index-page.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="duck blog" />
    <div className="index">
      <div className="side-bar">
        
      </div>
      <div className="content">
        <DarkModeToggler></DarkModeToggler>
      </div>
    </div>
    {/* StaticImage formats={["auto", "webp", "avif"]} */}
  </Layout>
)

export default IndexPage
