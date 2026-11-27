import React from 'react'

export default function ProductCard({product}) {
    console.log(product);
    
  return (
    <div>
      <img src={product.image} alt="" />
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}
