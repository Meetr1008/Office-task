import React from 'react'
import './Home.css'

import {NavLink ,Outlet} from 'react-router-dom'
function Home() {
  return (
    <div>
      <h1>This is home page</h1>
        {/* <header>

            <ul>
              <NavLink to='/'> <li>Home</li> </NavLink> 
              <NavLink to='/about'> <li>About</li> </NavLink> 
              <NavLink to='/contact'> <li>Contact</li> </NavLink> 
             
            </ul>
           
        </header> */}
      {/* <Outlet/> */}
    
     
    </div>


  )
}

export default Home
