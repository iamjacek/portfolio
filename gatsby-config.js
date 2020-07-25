module.exports = {
  siteMetadata: {
    title: `Jacek Witucki Web Development`,
    description: `Front end development, web development and web design. Create your website to become visible! Build your website here!`,
    author: `Jacek Witucki`,
    keywords:
      'web development, web design, create a website, coventry, bedworth, web developer, business website',
    siteUrl: `https://www.jacekwitucki.com`,
    image: './src/assets/ShareImage.png',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/favicon.png',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,

    // this (optionalProgressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
