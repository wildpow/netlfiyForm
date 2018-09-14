module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api.graphcms.com/simple/v1/cjlrp4qcs70qt0178mvh6gfn5`,
        query: require("./gatsby/configQuery")
      }
    }
  
  ],
}
