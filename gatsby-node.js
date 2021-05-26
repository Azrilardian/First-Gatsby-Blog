const path = require("path")

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const postTemplate = path.resolve("src/templates/blog-post.js")
  return graphql(`
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
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontMatter.path,
        component: postTemplate,
      })
    })
  })
}
