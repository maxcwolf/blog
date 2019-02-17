import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layouts'

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <h1>Wolf Blog Home Page</h1>
      {edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.frontmatter.path}>
            <h3>{node.frontmatter.title} </h3>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export default Index

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            title
            path
            date(formatString: "MM.DD.YYY")
            cover {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 90, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
