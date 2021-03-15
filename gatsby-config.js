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
    // {
    //   resolve: `gatsby-source-shopify`,
    //   options: {
    //     shopName: `costerdiamonds`,
    //     accessToken: `1c34cd73929ade77c9f419d77088242f`,
    //     apiVersion: "2020-07",
    //     shopifyQueries: {
    //       products: `
    //         query GetProducts($first: Int!, $after: String) {
    //           products(first: $first, after: $after) {
    //             pageInfo {
    //               hasNextPage
    //             }
    //             edges {
    //               cursor
    //               node {
    //                 availableForSale
    //               }
    //             }
    //           }
    //         }
    //       `,
    //     },
    //   },
    // },
    {
      resolve: "gatsby-source-shopify-experimental",
      options: {
        apiKey: process.env.SHOPIFY_ADMIN_API_KEY,
        password: process.env.SHOPIFY_ADMIN_PASSWORD,
        storeUrl: process.env.SHOPIFY_STORE_URL,
      },
    },
  ],
}
