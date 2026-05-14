import React from "react"
import "../App.css"
function CodeSnippet({title,language}) {
  
    
  return (
    <>
      <h1 className="naglowek">{title}</h1>
      <label className="etykieta">{language}</label>
      <pre><code>console.log("Hello World")</code></pre>
    </>
  )
}

export default CodeSnippet