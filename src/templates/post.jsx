import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { Layout, Container, Content } from '../layouts'
import { TagsBlock, Header } from '../components'

const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: ${props => props.theme.colors.white.light};
  box-shadow: ${props => props.theme.shadow.suggestion};
`
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
`

const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext // get pagination links from pageContext
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const date = post.frontmatter.date
  const image = post.frontmatter.cover.childImageSharp.fluid
  const html = post.html // the html isnt in the frontmatter object, but the markdownRemark obj.

  return (
    <Layout>
      <Header title={title} date={date} cover={image} />
      <Container>
        <Content input={html} />
        <TagsBlock list={post.frontmatter.tags || []} />
      </Container>
      <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous
              <h3>{prev.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <Link to={next.frontmatter.path}>
              Next
              <h3>{next.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>
    </Layout>
  )
}

/**
 * To get the path, used slug variable with the $pathSlug that we added previously, & make it a required String.
 * Since we want only one markdown file, using markdownRemark instead of allMarkdownRemark.
 */
export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        tags
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90
              duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 40 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`
export default Post
