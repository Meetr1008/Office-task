import React from 'react'
import {NavLink} from 'react-router-dom'

const Contact = () => {
  return (
    <div>
    <h1>This is contact page</h1>
    {/* <ul>
              <NavLink to='/'> <li>Home</li> </NavLink> 
              <NavLink to='/about'> <li>About</li> </NavLink> 
              <NavLink to='/contact'> <li>Contact</li> </NavLink> 
             
            </ul> */}
            <NavLink>
               <NavLink to='/contact/contact1'> <li>Contact1</li> </NavLink> 
            
            </NavLink>
      
    </div>
  )
}

export default Contact
