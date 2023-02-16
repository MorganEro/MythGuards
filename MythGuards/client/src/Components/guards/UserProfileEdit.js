import React, { useEffect, useState, useRef } from 'react';
import { UpdateUserProfile } from '../../modules/userProfileManager';
import { useNavigate, useParams } from 'react-router-dom';
import { GetUserProfileById} from '../../modules/userProfileManager';



export const UserProfileEdit = () => {

    const { id } = useParams();
    const userId = parseInt(id);
    const [oldUser, setOldUser] =useState({})
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        GetUserProfileById(userId)
            .then(data => {
                setOldUser(data)
            })
    }, []);


    
      const handleUpdateButtonClick = (e) => {
        e.preventDefault()
        const answer = window.confirm("Are you sure about these changes?");
                if (answer) {
                    UpdateUserProfile(userId, oldUser)
                    window.confirm("Changes Accepted!");
               
                } else {
                window.confirm("No changes were made");
                console.log("Changes not saved to the database.");
                }
        
    }

   

    return (
        <div className="userProfile_edit">
            <div>&nbsp;</div>
            <form className="userProfile_edit_form">
                <h2 className='userProfile_edit_h2'>Update Information</h2>
                <div className='userProfile_edit_form_user'>
                    <div>{oldUser.displayName}</div>
                    <img src={oldUser.imageUrl } alt={"Profile Image"} width="300" height="300"/>
                </div>
                <div className='userProfile_edit_form_inputs'>
                    <div>&nbsp;</div>
                    <fieldset>
                        <div className="userProfile_edit_field">
                            <label htmlFor="displayName">New DisplayName? : </label>
                            <input
                                required autoFocus
                                type="text"
                                className=" "
                                value={oldUser.displayName}
                                onChange={
                                    (evt) => {
                                        const copy = {...oldUser}
                                        copy.displayName = evt.target.value
                                        setOldUser(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <div>&nbsp;</div>
                    <fieldset>
                        <div className="userProfile_edit_field">
                            <label htmlFor="age">Age Changed? : </label>
                            <input
                                required autoFocus
                                type="number"
                                className=""
                                value={oldUser.age}
                                onChange={
                                    (evt) => {
                                        const copy = {...oldUser}
                                        copy.age= evt.target.value
                                        setOldUser(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <div>&nbsp;</div>
                    <fieldset>
                        <div className="userProfile_edit_field">
                            <label htmlFor="email">New Email? :</label>
                            <input
                                required autoFocus
                                type="email"
                                className=""
                                value={oldUser.email}
                                onChange={
                                    (evt) => {
                                        const copy = {...oldUser}
                                        copy.email = evt.target.value
                                        setOldUser(copy)
                                    }
                                } />
                        </div>
                    </fieldset> 
                    <div>&nbsp;</div>
                    <fieldset>
                        <div className="userProfile_edit_field_imageUrl">
                            <label htmlFor="imageUrl">New Profile Picture? Add a url:</label>
                            <input
                                required autoFocus
                                type="text"
                                className=""
                                value={oldUser.imageUrl}
                                onChange={
                                    (evt) => {
                                        const copy = {...oldUser}
                                        copy.imageUrl = evt.target.value
                                        setOldUser(copy)
                                    }
                            } />
                        </div>
                    </fieldset> 
                    <div>&nbsp;</div>
                    <fieldset>
                        <div className="userProfile_edit_field">
                            <label htmlFor="phoneNumber">New Phone Number? :</label>
                            <input
                                required autoFocus
                                type="tel"
                                className=""
                                value={oldUser.phoneNumber}
                                onChange={
                                    (evt) => {
                                        const copy = {...oldUser}
                                        copy.phoneNumber = evt.target.value
                                        setOldUser(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <div>&nbsp;</div>
                    <fieldset>
                        <div className="userProfile_edit_field">
                            <label htmlFor="address">Have you moved? :</label>
                            <input
                                required autoFocus
                                type="text"
                                className=""
                                value={oldUser.address}
                                onChange={
                                    (evt) => {
                                        const copy = {...oldUser}
                                        copy.address = evt.target.value
                                        setOldUser(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <div>&nbsp;</div>
                    <fieldset>
                        <div className="userProfile_edit_field">
                            <label htmlFor="details">More to share? :</label>
                            <input
                                required autoFocus
                                type="text"
                                className=""
                                value={oldUser.details}
                                onChange={
                                    (evt) => {
                                        const copy = {...oldUser}
                                        copy.details = evt.target.value
                                        setOldUser(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                </div>            
                <div>&nbsp;</div>
    
                <button
                    className="userProfile_edit_submit"
                    onClick={(clickEvent) => handleUpdateButtonClick(clickEvent)}>
                    SUBMIT CHANGES
                </button>
            </form>
            
        </div>
    )
}
