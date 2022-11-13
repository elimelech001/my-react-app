import React, { useState, useEffect } from "react";
import CreditCard from "./gancreditCard";
import GanForm from "./ganform";
function GanApp() {
  const [inputValue, setInputValue] = useState({});
  const [ganformSubmited, setganformSubmited] = useState(false);
  function updateInpute(event) {
    const { name, value } = event.target;

    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  }
  function ganformSubmit(e) {
    e.preventDefault();
    setganformSubmited(true)
  }
  function view() {
    
  }
  return <>{!ganformSubmited && <GanForm
     updateInpute={updateInpute}
     ganformSubmit={ganformSubmit}
     />}
    {ganformSubmited&&<CreditCard/>}
     </>;
}
// 

export default GanApp;

