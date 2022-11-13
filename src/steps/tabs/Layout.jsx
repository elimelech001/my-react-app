import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <h1>navbar</h1>
      <button>
      <NavLink
          style={(isActive) => (
           {color:isActive&&'green'}
          )}
          to="/"
        >
          Home
        </NavLink>
      </button>
      <button>
        <NavLink
          style={(isActive) => ({
            color: isActive ? "green" : "blue",
          })}
          to="about"
        >
          about
        </NavLink>
      </button>
      <button>
        <NavLink  style={(isActive) => ({
            color: isActive ? "green" : "blue",
          })} to="product">
          product
        </NavLink>
      </button>
      <button>
        <NavLink  style={(isActive) => ({
            color: isActive ? "green" : "blue",
          })} to="logIn">
          log In
        </NavLink>
      </button>
      <Outlet />
    </>
  );
}

export default Layout;
