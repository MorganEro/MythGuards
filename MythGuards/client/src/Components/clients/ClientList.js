import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetClientsList} from "../../modules/userProfileManager";


export const Clients = () => {
  const [clientProfiles, setClientProfiles] = useState([]);
    
    useEffect(() => {
        GetClientsList ()
            .then(usersData => {
                setClientProfiles(usersData)
            })
    }, []);

  return (
        <div>
            {clientProfiles.map(g => 
  
                            <div className="profile" key={g.id}>
                                <div> 
                                    <Link to={`/userProfile/details/${g.id}`}>{g.displayName}</Link>
                                </div>
                                <img src={g.imageUrl } alt={"Profile Image"} />
                                <div className="profile_items">Age : {g.age}'</div>
                                <div className="profile_items">Email : {g.email}</div>
                                <div className="profile_items">Phone Number: {g.phoneNumber}'</div>
                                <div className="profile_items">Join Date: {new Date(g.joinDate).toDateString()}</div>
                            </div>
                    )
            }            
        </div>
    )
}


