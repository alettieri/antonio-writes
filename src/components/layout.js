import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    return (
      <Wrapper>
        <Content>
          <header>
            <h1>{title}</h1>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/resume.pdf">Hire me!</Link>
            </nav>
          </header>
          <main>{children}</main>
        </Content>

        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  align-items: center;

  header {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  header h1 {
    margin-top: 0;
    order: 1;
  }

  header h1,
  header nav {
    margin-bottom: ${rhythm(1.5)};
  }

  nav a {
    padding: ${rhythm(3 / 4)};
  }

  nav [aria-current] {
    color: #000;
  }

  @media (min-width: 480px) {
    header {
      flex-direction: row;
    }

    header h1 {
      order: 0;
    }
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
