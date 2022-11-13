import React from "react";
import { user } from "./hooks";

function Info() {
  let infrmation = Object.entries(user).filter(e=> typeof e[1] !== "object");
 

  return (
    <div className="container ">
      <h3 className="h3 ">Personal information</h3>
      <dl className="dl-horizontal">
        {infrmation.map((e,i) => {
          return (
            <div className="border border-secondary" key={i}>
              <dt className=" border-bottom">{e[0]}</dt>
              <dd>{e[1]}</dd>
            </div>
          );
        })}

       
      </dl>
    </div>
  );
}

export default Info;
