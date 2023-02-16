
import { Navigate } from 'react-router-dom';
import {  onLoginStatusChange, Logout } from '../../modules/authManager';
import { Contracts } from '../contracts/ContractList';



export const GuardView = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(null);
     
    useEffect(() => {
        onLoginStatusChange(setIsLoggedIn);
      }, []);



    return (

        <Routes>
            <Route path="/">
                <Route index element={isLoggedIn ? < Welcome /> : <Navigate to="login" />}/>
                <Route path = "contract"  element ={isLoggedIn ? < Contracts /> : <Navigate to="login" />}/>
                <Route path = "contract/details/:id" element ={isLoggedIn ? <ContractCard/> : <Navigate to="login" />}/>
                <Route path = "userProfile/:id" element ={isLoggedIn ? < UserProfileEdit /> : <Navigate to="login" />}/>
            </Route>	
        </Routes>

    )
}

