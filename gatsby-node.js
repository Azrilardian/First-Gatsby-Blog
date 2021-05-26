const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("src/templates/blog-post.js")
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              date
              title
              author
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
    })
  })
}
