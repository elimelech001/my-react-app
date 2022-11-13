import React from 'react';
    
function Dashboard({ user }) {
  return <>
  <h1>welcome</h1>
  <h4>{user&&user.name} {user&&user.email}</h4>
  </>;
}

export default Dashboard;
