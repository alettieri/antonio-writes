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
        <p>I'm Antonio. (he/him)</p>
        <p>
          I'll be real with you, I don't rite much at the moment.
        </p>
        <p>
          The idea was to use this as a place to capture <Link to="/blog/">thoughts, notes and perhaps information</Link> that I would find useful in the future.
        </p>
      </Layout>
    )
  }
}

export default IndexPage
