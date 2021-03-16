/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-source-shopify`,
    //   options: {
    //     shopName: process.env.GATSBY_SHOP_NAME,
    //     accessToken: process.env.GATSBY_ACCESS_TOKEN,
    //     apiVersion: "2020-07",
    //     paginationSize: 50,
    //   },
    // },
    {
      resolve: "gatsby-source-shopify-experimental",
      options: {
        apiKey: process.env.SHOPIFY_ADMIN_API_KEY,
        password: process.env.SHOPIFY_ADMIN_PASSWORD,
        storeUrl: process.env.SHOPIFY_STORE_URL,
        paginationSize: 50,
        // downloadImages: true,
      },
    },
  ],
}
