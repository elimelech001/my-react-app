import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute({children, user }) {
  const navigate = useNavigate();
  console.log(navigate);
if (!user){
   return <Navigate to='/logIn'/>
} 
   return children
}

export default ProtectedRoute;
