
import { Navigate, Route, Routes } from "react-router-dom";
import { Register } from "../../modules/authManager";
import Login from "../authorize/Login";

import { Clients } from "../clients/ClientList";
import { ContractCard } from "../contracts/ContractDetails";
import Welcome from "../nav/Welcome";
import { Guards } from "../guards/GuardList";
import { Contracts } from "../contracts/ContractList";
import Card from "../guards/UserProfileCard";
import { ContractForm } from "../contracts/ContractForm";
import { ContractEdit } from "../contracts/ContractEdit";
import { UserProfileEdit } from "../guards/UserProfileEdit";




export default function ApplicationViews({ isLoggedIn }) {
  return (
      <main>
            <Routes>
              <Route path="/">
                
                  <Route path = "contract"  element ={isLoggedIn ? < Contracts /> : <Navigate to="login" />}/>
                  <Route path = "contract/details/:id" element ={isLoggedIn ? <ContractCard/> : <Navigate to="login" />}/>
                  <Route path = "contract/:id" element ={isLoggedIn ? <ContractEdit/> : <Navigate to="login" />}/>
                  <Route path = "contract/create" element ={isLoggedIn ? < ContractForm /> : <Navigate to="login" />}/>
                

                  <Route path = "userProfile/details/:userId" element ={isLoggedIn ? < Card /> : <Navigate to="login" />}/>
                  <Route path = "userProfile/guard" element ={isLoggedIn ? < Guards /> : <Navigate to="login" />}/>
                  <Route path = "userProfile/client" element ={isLoggedIn ? < Clients /> : <Navigate to="login" />}/>
                  <Route path = "userProfile/:id" element ={isLoggedIn ? < UserProfileEdit /> : <Navigate to="login" />}/>
                

                <Route index element={isLoggedIn ? < Welcome /> : <Navigate to="login" />}/>
                <Route path="login" element={< Login />} />
                <Route path="register" element={< Register  />} />
                <Route path="*" element={<p>Whoops, nothing here...</p>} />
              </Route>
            </Routes>
          </main>
  );
};    
          