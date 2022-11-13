import React from "react";
import { useNavigate } from "react-router-dom";
import fetchData from "./fetch";

function LogIn() {

  const navigate = useNavigate();
  const { data } = fetchData("users");
  let name, password;

  const checkPassword = (text) => {
    return password.value == text.address.geo.lat.slice(-4);
  };

  const submit = (e) => {
    e.preventDefault();

    const userInfo = data.find((e) => e.username === name.value);
    if (!userInfo) return alert('username not found')
    if (!checkPassword(userInfo)) return alert("password dosn't match username")

    localStorage.setItem("user", JSON.stringify(userInfo));
    navigate(`/users/${userInfo.id}`);
  };
  return (
    <>
      <div class="">
        <form>
          <div className="container d-flex align-items-center justify-content-center pt-5 ">
            <h2 className="h1">Log in </h2>
            User name
            <input
              className="form-control"
              required
              ref={(e) => (name = e)}
              type="text"
              style={{ width: "400px" }}
              placeholder="User name"
            />
            Password
            <input
              className="form-control"
              required
              placeholder="Password"
              ref={(e) => (password = e)}
              type="password"
              style={{ width: "400px" }}
            />
            <button className="btn btn-primary" onClick={submit}>
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LogIn;

