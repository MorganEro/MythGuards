import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { NaviBar } from './Components/nav/NaviBar';

import ApplicationViews from './Components/views/ApplicationViews';
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
      <NaviBar isLoggedIn={isLoggedIn} user={user} />
      <AppViews isLoggedIn={isLoggedIn}/>
    </Router>
  );
}

export default App;
