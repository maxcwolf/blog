import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/index'
import TagsBlock from '../components/TagsBlock'

const Post = ({ data }) => {
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const date = post.frontmatter.date
  const html = post.html //the html isnt in the frontmatter object, but the markdownRemark obj.

  return (
    <Layout>
      <h1>{title}</h1>
      <TagsBlock list={post.frontmatter.tags || []} />
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
      }
    }
  }
`
export default Post
