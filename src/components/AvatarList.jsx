import React from "react"


function ProductGrid({users}) {
  const Lista = users;

  return (
    <>
      {Lista.map((item  => 
        <div>
            <img src={`https://i.pravatar.cc/60?u=${item.id}`} />
            <p>{item.name}</p>
            <p>{item.role}</p>
        </div>

      
      ))}

      
    </>
  )
}

export default ProductGrid