import React, { useEffect, useState } from "react";
import { GetAllUserProfiles } from "../modules/userProfileManager";
import "./UserProfileList.css"

export const GuardList = () => {
  const [userProfiles, setUserProfiles] = useState([]);

    useEffect(() => {
        GetAllUserProfiles()
            .then(usersData => {
                setUserProfiles(usersData)
            })
    }, []);

  return (
        <div>
            {userProfiles.map((u) => {
                if (u.userType  === "Guard") {
                    return (
                        <div className="profile">
                            <h4>{u.displayName}</h4>
                            <img src={u.imageUrl } alt={"Profile Image"}>;</img>
                            <div className="profile_items">Age : {u.age}'</div>
                            <div className="profile_items">Email : {u.email}</div>
                            <div className="profile_items">Phone Number: {u.phoneNumber}'</div>
                            <div className="profile_items">Join Date: {u.joinDate}</div>
                        </div>
                            )
                    }})
            }            
        </div>
    )
}

