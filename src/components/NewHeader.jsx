import React from "react"
import logo from "../assets/logofirmy.jpg"
import "../App.css"
function NewHeader() {
  

  return (
    <>
    <div className="heading">
        <img src={logo} width={200} />
        <h1 >Nagłówek 456</h1>
        </div>
      <nav className="navBar">
        
            <a href="https://github.com/baqix" className="mainPage">Strona Główna</a>
            <a href="https://github.com/toxiccheese1" className="shoppingCart">Koszyk</a>
            <a href="https://github.com/Jakl0" className="contact">Kontakt</a>
        
      </nav>
    </>
  )
}

export default NewHeader