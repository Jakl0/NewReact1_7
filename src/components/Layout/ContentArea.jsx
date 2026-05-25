import React from "react"
import "./style.css"

function ContentArea({children}) {
  

  return (
    <>
      <p className="ContAr">{children}</p>
    </>
  )
}

export default ContentArea