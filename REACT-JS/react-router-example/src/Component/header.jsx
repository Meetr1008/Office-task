import React from 'react'
import { NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <>
        <ul>
          <NavLink to="./home">
            <li>Home</li>
          </NavLink>
          <NavLink to="/login">
            <li>Login</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
          <NavLink to ='/Modal'>
            <li>Modal</li>
          </NavLink>
        </ul>
      </>
    </div>
  );
}

export default Header
