module.exports = {
  siteMetadata: {
    title: 'Max Wolf',
    description: 'Personal Blog and Portfolio'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              quality: 90,
              linkImagesToOriginal: true
            }
          }
        ]
      }
    },
    'gatsby-plugin-sharp'
  ]
}
