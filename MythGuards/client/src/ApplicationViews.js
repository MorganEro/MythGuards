import { Navigate, Route, Routes } from "react-router-dom";
import { ContractDetails } from "./Components/contracts/ContractDetails";
import { ContractEdit } from "./Components/contracts/ContractEdit";
import { ContractForm } from "./Components/contracts/ContractForm";
import { UserProfileEdit } from "./Components/users/UserProfileEdit";
import { UserProfileCard } from "./Components/users/UserProfileCard";

import Welcome from "./Components/nav/Welcome";
import Login from "./Components/authorize/Login";
import { ContractList } from "./Components/contracts/ContractList";
import { GuardList } from "./Components/users/GuardList";
import { ClientList } from "./Components/users/ClientList";
import { AllUserList } from "./Components/users/AllUserProfiles";
import Register from "./Components/authorize/Register";




export default function ApplicationViews({ isLoggedIn, user }) {
  return (
      <main>
            <Routes>
              <Route path="/">
                
                  <Route path = "contract/list"  element ={isLoggedIn ? < ContractList user={user} /> : <Navigate to="/login" />}/>
                  <Route path = "contract/details/:id" element ={isLoggedIn ? < ContractDetails /> : <Navigate to="/login" />}/>
                  <Route path = "contract/:id" element ={isLoggedIn ? < ContractEdit/> : <Navigate to="/login" />}/>
                  <Route path = "contract/create/:userId" element ={isLoggedIn ? < ContractForm /> : <Navigate to="/login" />}/>
                
                  <Route path = "userProfile/details/:userId" element ={isLoggedIn ? < UserProfileCard user= {user}/> : <Navigate to="/login" />}/>
                  <Route path = "userProfile/guard" element ={isLoggedIn ? < GuardList /> : <Navigate to="/login" />}/>
                  <Route path = "userProfile/client" element ={isLoggedIn ? < ClientList /> : <Navigate to="/login" />}/>
                  <Route path = "userProfile/all" element ={isLoggedIn ? < AllUserList /> : <Navigate to="/login" />}/>
                  <Route path = "userProfile/details/:userId" element ={isLoggedIn ? < UserProfileEdit/> : <Navigate to="/login" />}/>
                
                <Route index element={< Welcome/> }/>
                <Route path="login" element={!isLoggedIn ? < Login />: ""} />
                <Route path="register" element={!isLoggedIn ? < Register />: ""} />
                <Route path="*" element={<p>Whoops, nothing here...</p>} />
              </Route>
            </Routes>
          </main>
  );
};    
          