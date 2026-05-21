import React, { useState } from "react"
import "../App.css"

function Button({label,variant='primary',size="md",Disabled=false}) {
    const [wielkosc,setWielkosc] = useState("medium");
    if(size == "sm")
        return (
    
        <button disabled={Disabled} className={variant} style={{fontSize:"small" , cursor:"pointer"}}>{label}</button>

  )
    else if(size == "md")
        return (
    
        <button disabled={Disabled} className={variant} style={{fontSize:"medium" , cursor:"pointer"}}>{label}</button>

  )
    else if (size=="lg")
        return (
    
        <button disabled={Disabled} className={variant} style={{fontSize:"large" , cursor:"pointer"}}>{label}</button>

  )
    else
        return (
    
        <button disabled={Disabled} className={variant} style={{fontSize:"medium" , cursor:"pointer"}}>{label}</button>

  )
        
    


  return (
    
        <button disabled={Disabled} className={variant} style={{fontSize:wielkosc , cursor:"pointer"}}>{label}</button>

  )
}

export default Button