import { Link} from "react-router-dom"
import { NavLink } from "react-router-dom"
import { logout } from "../../modules/authManager"
import { thisUser, onLoginStatusChange, Logout } from '../../modules/authManager';


export const ClientNav = () => {
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
        <ul className="navbar" >
            <li className="navbar_link"> 
                <Link className="navbar__link" to="/">MythGuards</Link>
            </li>
            <li className=""> 
                <NavLink to="/guardList">Guards</NavLink> 
            </li>
            <li className=""> 
                <NavLink to="/profile">Profile</NavLink> 
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

