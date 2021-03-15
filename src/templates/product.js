import React from "react"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  return (
    <>
      <h1>{product.title}</h1>
      <div>{product.description}</div>
    </>
  )
}
export default ProductTemplate
