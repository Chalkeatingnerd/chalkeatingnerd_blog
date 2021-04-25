import * as React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import SideBar from '../../components/side-bar';
import Content from '../../components/content';
import '../style/global.scss';
import './index-page.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="duck blog" />
    <div className="index">
      <SideBar/>
      <Content/>
    </div>
  </Layout>
)

export default IndexPage
