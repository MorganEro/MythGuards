// import { ClientNav } from "./ClientNav"
// import { GuardNav } from "./GuardNav"
// import { AdminNav } from "./AdminNav"
// //Todo import userType checkers from authManager

import { Link, NavLink } from "react-router-dom";

// export default function NavBar ({ isLoggedIn }) {

  

//   if (isUserAdmin === true) {
//     return <AdminNav />
//   } else if (isUserClient === true) {
//     return <ClientNav />
//   } else {
//     return <GuardNav />
//   }
// }
export default function NavBar ({ isLoggedIn}) {
return (
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
          <Link className="navbar__link" to="/" onClick={logout}>Logout</Link>
      </li>
     
  </ul>
)
}