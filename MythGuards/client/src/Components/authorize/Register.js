import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { register } from "../../modules/authManager";


export default function Register() {
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [details, setDetails] = useState();
  const [joinDate, setJoinDate] = useState();
  const [userTypeId, setUserTypeId] = useState(); 
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const registerClick = (e) => {
    e.preventDefault();
    if (password && password !== confirmPassword) {
      alert("Passwords don't match. Do better.");
    } else {
      const userProfile = {
        displayName,
        age,
        email,
        imageUrl,
        phoneNumber,
        address,
        details,
        joinDate,
        userTypeId,
        password,
        confirmPassword
      };
      register(userProfile, password).then(() => navigate("/"));
    }
  };

  return (
    <Form onSubmit={registerClick}>
      <fieldset>
        <FormGroup>
          <Label htmlFor="displayName">DisplayName</Label>
          <Input
            id="displayName"
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            type="number"
            onChange={(e) => setAge(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Display Name</Label>
          <Input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="imageUrl">Image Url</Label>
          <Input
            id="imageUrl"
            type="text"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="JoinDate">JoinDate</Label>
          <Input
            id="joinDate"
            type="date"
            onChange={(e) => setJoinDate(e.target.value)}
          />
        </FormGroup>
        <Form.Select
            id="userTypeId"
            onChange={(e) => setUserTypeId(parseInt(e.target.value))}>
          <option>UserType</option>
          <option value="1" disabled >Admin</option>
          <option value="2">Guard</option>
          <option value="3">Client</option>
        </Form.Select>
        <FormGroup>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            type="tel"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="details">Details</Label>
          <Input
            id="details"
            type="text"
            onChange={(e) => setDetails(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Button>Register</Button>
        </FormGroup>
      </fieldset>
    </Form>
  );
}
