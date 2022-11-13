import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  function Submit(e) {
    e.preventDefault();
    setUser({ name, email });
    navigate("/dashboard");
  }
  return (
    <>
      <form onSubmit={Submit}>
        name: <input required onChange={(e) => setName(e.target.value)} type="text" />{" "}
        <br />
        email: <input required onChange={(e) => setEmail(e.target.value)} type="text" />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default LogIn;
