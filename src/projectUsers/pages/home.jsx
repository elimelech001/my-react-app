import React from "react";
import { NavLink, Link, Navigate, Outlet, useParams } from "react-router-dom";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { userid } = useParams();
  //  console.log(userid,user.id);
  if (!user || `${userid}` !== `${user.id}`) {
    return <Navigate to="/login" />;
  }
  const styleing = ({ isActive }) => {
    return {
      borderBottom: isActive ? "1px solid black " : "",
      background: isActive ? "#d9d9d9" : "",
    };
  };
  return (
    <>
      <h3>welcome {user.name} </h3>
      <br />

      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                style={styleing}
                className={"nav-link active "}
                id="home-tab"
                to="info"
              >
                info
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={styleing}
                className={"nav-link active"}
                to="todos"
              >
                todos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={styleing}
                className={"nav-link active"}
                to="albums"
              >
                albums
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={styleing}
                className={"nav-link active"}
                to="posts"
              >
                posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={styleing}
                onClick={(e) => localStorage.removeItem("user")}
                className="nav-link active"
                to="/login"
              >
                logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    
    </>
  );
}

export default Home;
function Index() {
  const user = JSON.parse(localStorage.getItem("user"));
  return ( 
    <div className="container ">
    <h2 className="text-primary">Hello {user.name}</h2>
    <p className="h3 text-success border">
     This is website that gets you to users info ,posts, albums and so on <br />injoy  your way
      around
     
      and don't forget to log out when your finished
    </p></div>
   );
}

export  {Index};