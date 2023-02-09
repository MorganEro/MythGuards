import React, { useEffect, useState } from "react";
import { GetUserProfile } from "../modules/userProfileManager";


export const ClientCard = (id) => {
  const [clientProfile, setClientProfile] = useState([]);

    useEffect(() => {
        GetUserProfile(id)
            .then(clientData => {
                setClientProfile(clientData)
            })
    }, []);

  return (
        <div>
             return (
                <div className="profile">
                    <h4>{clientProfile.displayName}</h4>
                    <img src={clientProfile.imageUrl } alt={"Profile Image"}>;</img>
                    <div className="profile_items">Age : {clientProfile.age}'</div>
                    <div className="profile_items">Email : {clientProfile.email}</div>
                    <div className="profile_items">Phone Number: {clientProfile.phoneNumber}'</div>
                    <div className="profile_items">Join Date: {clientProfile.joinDate}</div>
                </div>
                )
        </div>
    )
}

