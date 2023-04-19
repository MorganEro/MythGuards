import React, { useEffect, useState } from 'react';
import { UpdateUserProfile } from '../../modules/userProfileManager';
import { useParams } from 'react-router-dom';
import { GetUserProfileById} from '../../modules/userProfileManager';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'




export const UserProfileEdit = () => {

    const { id } = useParams();
    const userId = parseInt(id);
    const [oldUser, setOldUser] =useState({})
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
   


    useEffect(() => {
        GetUserProfileById(userId)
            .then(data => {
                setOldUser(data)
            })
    }, []);

      const handleUpdateButtonClick = (e) => {
        e.preventDefault()
        UpdateUserProfile(userId, oldUser)       
    }

   

    return (
                
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{oldUser.displayName}</Modal.Title>
        </Modal.Header>
        <Image thumbnail="true" src={oldUser.imageUrl } alt={"Profile Image"} width="300" height="300"/>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ControlInput1">
              <Form.Label>Display Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={oldUser.displayName}
                onChange={
                    (evt) => {
                        const copy = {...oldUser}
                        copy.displayName = evt.target.value
                        setOldUser(copy)
                    }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput2">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                autoFocus
                value={oldUser.age}
                onChange={
                    (evt) => {
                        const copy = {...oldUser}
                        copy.age = evt.target.value
                        setOldUser(copy)
                    }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                autoFocus
                value={oldUser.email}
                onChange={
                    (evt) => {
                        const copy = {...oldUser}
                        copy.email = evt.target.value
                        setOldUser(copy)
                    }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput4">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={oldUser.imageUrl}
                onChange={
                    (evt) => {
                        const copy = {...oldUser}
                        copy.imageUrl = evt.target.value
                        setOldUser(copy)
                    }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput5">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                autoFocus
                value={oldUser.phoneNumber}
                onChange={
                    (evt) => {
                        const copy = {...oldUser}
                        copy.phoneNumber = evt.target.value
                        setOldUser(copy)
                    }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput6">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={oldUser.address}
                onChange={
                    (evt) => {
                        const copy = {...oldUser}
                        copy.address = evt.target.value
                        setOldUser(copy)
                    }}
              />
            </Form.Group>        
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateButtonClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
