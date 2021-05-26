import { graphql, Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Blogs = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <Seo title="blogs" />
      <h1>All blogs.</h1>
      <br />
      <br />
      {edges.map(post => {
        const {
          id,
          frontmatter: { path, date, title, author },
        } = post.node
        return (
          <div key={id}>
            <h3>{title}</h3>
            <small>
              Post by {author} on {date}
            </small>
            <br />
            <Link to={path}> Read More</Link>
            <hr />
          </div>
        )
      })}
    </Layout>
  )
}

export default Blogs

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
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
`
