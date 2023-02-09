import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/authorize/Login";
import Register from "./Components/authorize/Register";
import { ClientCard } from "./Components/clients/ClientCard";
import { ClientList } from "./Components/clients/ClientList";
import { ContractForm } from "./Components/contracts/ContractFrom";
import { ContractList } from "./Components/contracts/ContractList";
import { GuardCard } from "./Components/guards/GuardCard";
import { GuardList } from "../guards/GuardList copy";

import UserProfileList from "./Components/UserProfileList";
import { AdminView } from "./Components/views/AdminView";
import { ClientView } from "./Components/views/ClientView";
import { GuardView } from "./Components/views/GuardView";


export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">
          
        <Route path="contracts" element={ <ContractList /> } />
		    <Route path="profile" element={ <ClientCard /> } />
        <Route path="guard" element={ <GuardCard /> } />
		    <Route path="contractForm" element={ <ContractForm/> } />
		    <Route path="guardList" element={ <GuardList /> } />
		    <Route path="clientList" element={ <ClientList /> } />


          <Route
            index
            element={isLoggedIn ? <Hello /> : <Navigate to="/login" />}/>
          <Route path="login" element={< Login/>} />
          <Route path="register" element={< Register />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  )
 
  // if (isUserAdmin === true) {
  //   return <AdminView/>
  // } else if (isUserClient === true) {
  //   return <ClientView/>
  // } else {
  //   return <GuardView />
  // }
}    
          