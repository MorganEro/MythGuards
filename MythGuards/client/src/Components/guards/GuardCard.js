import React, { useEffect, useState } from "react";
import { GetUserProfile } from "../modules/userProfileManager";

export const GuardCard = (id) => {
  const [guardProfile, setGuardProfile] = useState([]);

    useEffect(() => {
        GetAllUserProfile(id)
            .then(usersData => {
                setGuardProfile(usersData)
            })
    }, []);

  return (
        <div>
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
        </div>
    )
}

