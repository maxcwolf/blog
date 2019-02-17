import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Header, PostList } from '../components'
import { Layout } from '../layouts'

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <Header title="Max Wolf">Home</Header>
      <div style={{ 'text-align': 'center', fontSize: '2rem' }}>
        <span role="img" aria-label="warning sign">
          {' '}
          ⚠️{' '}
        </span>{' '}
        This site is a Work In Progress{' '}
        <span role="img" aria-label="warning sign">
          {' '}
          ⚠️{' '}
        </span>
      </div>
      <PostWrapper>
        {edges.map(({ node }) => (
          <PostList
            key={node.id}
            cover={node.frontmatter.cover.childImageSharp.fluid}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          />
        ))}
      </PostWrapper>
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
