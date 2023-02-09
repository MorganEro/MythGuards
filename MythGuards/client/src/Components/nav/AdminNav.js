import { Link} from "react-router-dom"
import { NavLink } from "react-router-dom"
import { logout } from "../../modules/authManager"



export const AdminNav = () => {

    // const activeLink = ''
    // const normalLink = ''
    //Todo Make links active or inactive
    



    return (
        <ul className="navbar" >
            <li className="navbar_link"> 
                <Link className="navbar__link" to="/">MythGuards</Link>
            </li>
            <li className=""> 
                <NavLink to="/guardList">Guards</NavLink> 
            </li>
            <li className=""> 
                <NavLink to="/clientList">ClientList</NavLink> 
            </li>
            <li className="">  
                 <NavLink to="/contracts" >Contracts</NavLink>    
            </li>
            <li>
                <Link className="navbar__link" to="/" onClick={logout}>Logout</Link>
            </li>
        </ul>
    )
}

