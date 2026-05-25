import React from "react"
import "./style.css"

function PageLayout({children , heading , footing}) {
  

  return (
    <>
      <h1 className="naglowek">{heading}</h1>
      <div className="glowna">
        {children}
      </div>
      <p className="stopa">{footing}</p>
    </>
  )
}

export default PageLayout