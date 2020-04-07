module.exports = {
  siteMetadata: {
    title: `Jacek Witucki Web Development`,
    description: `Front end development, web development and web design. Create your website to become visible!`,
    author: `Jacek Witucki`,
    siteUrl: `https://www.jacekwitucki.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jacek Witucki Web Development`,
        short_name: `JW`,
        start_url: `/`,
        background_color: `#545353`,
        theme_color: `#F0EBE7`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    // this (optionalProgressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
