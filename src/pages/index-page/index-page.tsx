import * as React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import DarkModeToggler from '../../components/dark-mode-theme';
import SideBar from '../../components/side-bar';
import '../style/global.scss';
import './index-page.scss';
import Content from '../../components/content';

const IndexPage = () => (
  <Layout>
    <SEO title="duck blog" />
    <div className="index">
      <SideBar/>
      <Content/>
    </div>
    {/* StaticImage formats={["auto", "webp", "avif"]} */}
  </Layout>
)

export default IndexPage
