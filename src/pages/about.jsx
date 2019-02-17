import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts'

const About = ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title} About Page</h1>
    <p>This is the about page.</p>
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
