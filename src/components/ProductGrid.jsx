import React from "react"
import ProductCard from "./ProductCard"

function ProductGrid(props) {
  
  const Lista = props.items;
  return (
    <>
      
      {Lista.map((item  =>
        <ProductCard  nazwa={item.nazwa} opis={item.opis} />
      )

      )}
      
    </>
  )
}

export default ProductGrid