import React from "react"
import '../App.css'

function ProductCard({nazwa,opis}) {
  

  return (
    <>
      
        <div  className="Frame">
          
          <h2>{nazwa}</h2>
          <h4>{opis}</h4>
        </div>
    
      
    </>
  )
}

export default ProductCard