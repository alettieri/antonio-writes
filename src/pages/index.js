import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
        <p>🙌🏼 I'm Antonio. (he/him)</p>
        <p>
          Let's be real, I don't write much at the moment.
        </p>
        <p>
          I did start capturing some <Link to="/blog/">thoughts and notes</Link> that I may want to reference in the future. Maybe at some point I'll continue building on that idea.
        </p>
      </Layout>
    )
  }
}

export default IndexPage
