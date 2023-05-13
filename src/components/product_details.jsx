import React from "react";
import { useLocation } from "react-router-dom";  // for getting data 

function Product_details(){
    let get_data =useLocation()
    console.log(get_data.state)
    return(
        <>
        <h1>Product Details </h1><br />
        <b>name:{get_data.state.name}</b><br />
        <b>address:{get_data.state.address}</b><br />
        <b>Age:{get_data.state.age}</b><br />
        <b>Contact:{get_data.state.contact}</b><br />
        <b>Fess_paid:{get_data.state.fess_paid}</b><br />
        
        </>
    )
}

export default Product_details




