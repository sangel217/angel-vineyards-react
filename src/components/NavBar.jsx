import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  return(
    <div>
      <h1>Welcome to Angel Vineyards Estate</h1>
      <Link to="/">Menu</Link> | <Link to="/newwine">Add New Wine</Link> | <Link to="/admin">Admin</Link>
    </div>
  );
}

export default NavBar;