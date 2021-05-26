import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <Seo title="contact" />
      <h1>Lets Connect!</h1>
      <ul>
        <li>
          <a
            href="https://github.com/azrilardian"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com/azril.ardian.1"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/azrilardian"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/azrilardian_"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default Contact
