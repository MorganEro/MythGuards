import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import UserProfileList from "../UserProfileList";



import CategoryList from "./CategoryList";
import TagList from "./TagList";
//  import TagForm from "./TagForm";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">
        
          <Route path="profiles">
            <Route index element={<UserProfileList/> }/>
          </Route>
          <Route
            index
            element={isLoggedIn ? <Hello /> : <Navigate to="/login" />}/>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
};  
          
          