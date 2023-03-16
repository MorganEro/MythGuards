import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from './ApplicationViews';
import Header from './Components/nav/Header';
import { onLoginStatusChange, thisUser } from "./modules/authManager";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(null);

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
    <Router>
      < Header isLoggedIn={isLoggedIn} user={user} />
      < ApplicationViews isLoggedIn={isLoggedIn} user={user}/>
    </Router>
  );
}

export default App;
