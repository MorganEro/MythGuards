import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

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
    </>
  );
}

render(<Example />);