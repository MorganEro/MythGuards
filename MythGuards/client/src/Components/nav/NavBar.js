import { thisUser, onLoginStatusChange, Logout } from '../../modules/authManager';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";





export default function NavBar () {

    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(null);
     
    useEffect(() => {
        onLoginStatusChange(setIsLoggedIn);
      }, []);

      useEffect(() => {
        if (isLoggedIn) {
          thisUser().then(setUser);
        } else {
          setUser(null);
        }
      }, [isLoggedIn]);
      



return (
    <div>
        {isLoggedIn && 
        
            <ul className="navbar" >
                <li className="navbar_link"> 
                    <Link className="navbar__link" to="/">MythGuards</Link>
                </li>
                <li className=""> 
                    <NavLink to="/guardList">Guards</NavLink> 
                </li>
                
                <li className=""> 
                    <NavLink to="/contractForm">Contract</NavLink> 
                </li>
                <li className="">  
                    <NavLink to="/contracts" >Contracts</NavLink>    
                </li>
                <li className=""> 
                    <NavLink to="/clientList">ClientList</NavLink> 
                </li>
                <li>
                    <Link className="navbar__link" to="/" onClick={Logout}>Logout</Link>
                </li>
            </ul>        
        } 
        {!isLoggedIn && 
          
            <ul className="navbar" >
                <li className=""> 
                    <NavLink to="/login">Login</NavLink> 
                </li>
                <li className=""> 
                    <NavLink to="/register">Register</NavLink> 
                </li>
            </ul>                   
        } 
  </div>
)
}