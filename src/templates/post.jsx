import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/index'
import TagsBlock from '../components/TagBlock'

const Post = ({ data }) => {
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const date = post.frontmatter.date
  const html = post.html

  return (
    <Layout>
      <h1>{title}</h1>
      <TagsBlock list={post.frontmatter.tags || []} />
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}
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
