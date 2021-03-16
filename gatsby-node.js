const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Shopify
  const result = await graphql(`
    query {
      allShopifyProduct {
        edges {
          node {
            title
            images {
              gatsbyImageData(width: 500, height: 500)
            }
            shopifyId
            handle
            description
            priceRangeV2 {
              minVariantPrice {
                amount
              }
            }
            productType
            vendor
            variants {
              price
              shopifyId
              product {
                images {
                  gatsbyImageData(width: 200, height: 200)
                }
                title
              }
            }
            options {
              values
            }
          }
        }
      }
    }
  `)
  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/products/${node.handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        product: node,
      },
    })
  })
}
