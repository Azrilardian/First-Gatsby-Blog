import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Template = ({ data }) => {
  const {
    frontmatter: { date, title, author },
    html,
  } = data.markdownRemark

  return (
    <Layout>
      <Seo title="detail-blog" />
      <Link to="/blogs">Go Back</Link>
      <hr />
      <h1>{title}</h1>
      <p>
        Post by {author} on {date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default Template

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        title
        author
      }
    }
  }
`
