import React from "react";
import data from "./info";
import {Link } from "react-router-dom";

function Product() {
  
  return (
    <>
    <br />
      {data.map((e) => {
        
        return (
          <>

         <Link to={e.id}> <button>{e.name}</button> </Link>  
           
           
          </>
        );
      })}
    </>
  );
}

export default Product;
