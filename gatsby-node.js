/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function ({ actions, graphql }) {
  actions.createPage({
    path: '/',
    component: require.resolve('./src/pages/index-page/index.ts'),
  });
}
