import React from "react";
function Info() {
  const user = JSON.parse(localStorage.getItem("user"));
  let infrmation = Object.entries(user).filter(e=> typeof e[1] !== "object");
  let adress = Object.entries(user.address).filter(e=> typeof e[1] !== "object");
  let company = Object.entries(user.company);

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
