module.exports = {
  siteMetadata: {
    title: 'E.S.C Mattress Center',
    siteUrl: `https://angry-booth-efe207.netlify.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api.graphcms.com/simple/v1/cjlrp4qcs70qt0178mvh6gfn5`,
        query: require("./gatsby/configQuery")
      }
    }
  
  ],
}
