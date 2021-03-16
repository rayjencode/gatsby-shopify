import React from "react"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  console.log(product)
  return (
    <>
      <h1>{product.title}</h1>
      <div>{product.description}</div>
    </>
  )
}

export default ProductTemplate
