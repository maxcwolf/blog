import React from "react"
import { graphql } from "gatsby"
import { Header } from "../components"
import { Layout, Container } from "../layouts"

const About = center => (
  <Layout>
    <Header title="About Me">My Name is Max</Header>
    <Container center={center}>
      <h3>derpy derp derp</h3>
    </Container>
  </Layout>
)

export default About

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
