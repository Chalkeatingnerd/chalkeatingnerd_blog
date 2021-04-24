exports.createPages = async function ({ actions, graphql, reporter }) {
  const blogPostTemplate1 = require.resolve(`./src/templates/blogTemplate1.js`);
  const blogPostTemplate2 = require.resolve(`./src/templates/blogTemplate2.js`);
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
              template
            }
          }
        }
      }
    }
  `);

  actions.createPage({
    path: '/',
    component: require.resolve('./src/pages/index-page/index.ts'),
  });

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const template = node.frontmatter.template == 1 ? blogPostTemplate1 : blogPostTemplate2
    actions.createPage({
      path: node.frontmatter.slug,
      component: template,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

}
