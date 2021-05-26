import * as React from "react"
import { Link } from "gatsby"

const Template = ({ data }) => {
  // const {
  //   frontmatter: { date, title, author },
  //   html,
  // } = data.markdownRemark
  const post = data.markdownRemark

  return (
    <div>
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <p>
        Post by {post.frontmatter.author} on {post.frontmatter.date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
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
