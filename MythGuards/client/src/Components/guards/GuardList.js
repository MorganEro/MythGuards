import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetGuardsList} from "../../modules/userProfileManager";


export const Guards = ({ searchTermState }) => {
  const [guardProfiles, setGuardProfiles] = useState([]);

    
    useEffect(() => {
        GetGuardsList ()
            .then(usersData => {
                setGuardProfiles(usersData)
            })
    }, []);


  



  return (
        <div>
             {/* <div className= "profile_sorts">
                    <select
                    required autoFocus
                    className="">
                        <option id="0" value= "0">--Sort Options--</option>
                        <option id="1" value= "1" onClick={(clickEvent) => sortButton  (clickEvent)}> Sort A - Z</option>
                        <option id="2" value= "2" onClick={(clickEvent) => sortButtonDescending  (clickEvent)}> Sort Z - A</option>
                        <option id="3" value= "3" onClick={(clickEvent) => sortButtonEmail  (clickEvent)}> Sort by Email</option>
                    </select>    
                </div> */}
            {guardProfiles.map(g => 
  
                            <div className="profile" key={g.id}>
                               
                                <div> 
                                    <Link to={`/userProfile/details/${g.id}`}>{g.displayName}</Link>
                                </div>
                                <img src={g.imageUrl } alt={"Profile Image"} />
                                <div className="profile_items"><span>Age </span> : {g.age}'</div>
                                <div className="profile_items">Email : {g.email}</div>
                                <div className="profile_items">Phone Number: {g.phoneNumber}'</div>
                                <div className="profile_items">Join Date: {g.joinDate}</div>
                            </div>
                    )
            }            
        </div>
    )
}

