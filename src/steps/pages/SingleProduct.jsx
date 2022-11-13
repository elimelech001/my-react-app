import React from "react";
import { useParams } from "react-router-dom";
import data from "./info";

function SingleProduct() {
  const { productID } = useParams();
  const find = data.find((e)=> e.id==productID);
 console.log(find);

 const name=find.name[0].toLocaleUpperCase() + find.name.substring(1)
  return (

    <div>
      <img src={find.image}width='200' />
      <h1>{name}</h1>
      {" "}
    </div>
  );
}

export default SingleProduct;
