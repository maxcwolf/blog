import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts/index'
import TagsBlock from '../components/TagsBlock'

const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext // get pagination links from pageContext
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const date = post.frontmatter.date
  const html = post.html // the html isnt in the frontmatter object, but the markdownRemark obj.

  console.log({ pageContext })
  return (
    <Layout>
      <Img fluid={post.frontmatter.cover.childImageSharp.fluid} />
      <h1>{title}</h1>
      {/* I AM USING THE TAGBLOCK WRONG */}
      <TagsBlock list={post.frontmatter.tags || []} />
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div>{next && <Link to={next.frontmatter.path}>Next Post</Link>}</div>
      <div>{prev && <Link to={prev.frontmatter.path}>Previous Post</Link>}</div>
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
