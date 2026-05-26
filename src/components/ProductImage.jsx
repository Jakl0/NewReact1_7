import React from "react"

function ProductImage({src,alt}){

    return(
        <>
        
        
        <img height={200} width={300} style={{objectFit:"cover"}} src={src} alt={alt} />

        </>
    );
}
export default ProductImage