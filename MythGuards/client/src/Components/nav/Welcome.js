import React, { useEffect, useState } from "react";
import "../CSS/welcome.css";
import { thisUser, onLoginStatusChange } from '../../modules/authManager';


export default function Welcome() {

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
      <div className="welcome">
        <div className="welcome_item" id="img-box">
        </div>
        <div className="welcome_item">
            <span className="welcome_span">Welcome to MythGuards!</span> Thank you for choosing us as your home for the safety of you, your loved ones, and your possessions. Please take the time to explore the site and the list of available guardians. If you find that the site was unable to provide you with all the answers you were looking for, reach out to an Admin for further assistance. Enjoy your visit.
        </div>
       
      </div>
  );
}