import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Cards</Link>
    </li>
    <li>
      <Link to="/create_task">Create Task</Link>
    </li>
    <li>
      <Link to="/find_time">Find Time</Link>
    </li>
  </div>
  );
}
export default Navbar;