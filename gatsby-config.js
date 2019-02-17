module.exports = {
  siteMetadata: {
    title: "Max Wolf",
    description: "Personal Blog and Portfolio"
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`
      }
    }
  ]
}
