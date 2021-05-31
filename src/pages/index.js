import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Antonio Writes"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[
            `blog`,
            `thoughts`,
            `javascript`,
            `react`,
            "antonio essex-lettieri",
          ]}
        />
        <p>Hi,</p>
        <p>I'm Antonio.</p>
        <p>
          I'll be sharing{" "}
          <Link to="/blog/">thoughts, notes and perhaps information</Link> that
          may or may not be useful to you.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Check out my blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
