import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetUserProfileById } from "../../modules/userProfileManager";
import "../CSS/guardCard.css";

const Card = () => {
    const [profile, setProfile] = useState({});
    const { userId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        GetUserProfileById(userId)
            .then(setProfile)
    }, [userId]);
   

    const EditButton = () => {
        navigate(`/userProfile/${profile.id}`)
    }

  return (
        <div className="profile">
            <h4>{profile.displayName}</h4>
            <img src={profile.imageUrl } alt={"Profile Image"} width="300" height="300"/>
            {/* <img src={profile.imageUrl } alt={"Profile Image"} width="300" height="300"/> */}
            <div className="profile_items_age" ><span>Age </span> : {profile?.age}</div>
            <div className="profile_items_email"><span>Email </span> : {profile?.email}</div>
            <div className="profile_items_details">
                <div>
                <span>Details </span> : {profile?.details}
                </div> 
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec dui. Id aliquet lectus proin nibh nisl condimentum id. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Lacus sed turpis tincidunt id aliquet risus feugiat. Vulputate mi sit amet mauris commodo quis. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Accumsan lacus vel facilisis volutpat est velit. Vel fringilla est ullamcorper eget nulla facilisi. Dictumst quisque sagittis purus sit amet volutpat. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Velit scelerisque in dictum non consectetur a erat nam at.
                </div> 
            </div>
            <div className="profile_items_phone"><span>PhoneNumber </span>: {profile?.phoneNumber}</div>
            <div className="profile_items_joinDate"><span>Join Date </span>: {new Date(profile?.joinDate).toDateString()}</div>
            <button className="profile_back_button" onClick={(clickEvent) => EditButton (clickEvent)}>Edit</button>  
        </div> 

    )         
   
}

export default Card
