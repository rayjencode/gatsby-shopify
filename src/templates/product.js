import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  console.log(product)
  return (
    <>
      <div>
        <GatsbyImage
          image={product.featuredImage.gatsbyImageData}
          alt={product.title}
        />
      </div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h3>{product.priceRangeV2.minVariantPrice.amount}</h3>
    </>
  )
}

export default ProductTemplate
