
import { AllProfileSearch, GetUserProfilesList} from "../../modules/userProfileManager";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardImg,
  CardGroup,
} from "reactstrap";
import "../CSS/profileList.css";
import { FormGroup, Input } from "reactstrap";

export const AllUserList= () => {
  const [allProfiles, setAllProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [userSearchText, setUserSearchText] = useState("");
  const SearchForProfile = () => {
    AllProfileSearch(userSearchText).then(setFilteredProfiles);
  }

  useEffect(() => {
    setFilteredProfiles (allProfiles)}, [allProfiles]);

  useEffect(() => {
    GetUserProfilesList().then((usersData) => {
      setAllProfiles(usersData);
    });
  }, []);

  const handleBackButton = () => { 
    setFilteredProfiles(allProfiles)
    
  }
  const scrollUp = () => {
    window.scrollTo({
      top: 0
    })
   }

  return (
    <div className="profiles-page-all">
       <Button color= "primary" size="sm" className="topOfPage" onClick= {scrollUp}>Top Of Page</Button>  
      <div className="guard_profile_search-wrapper">
        
        <Button color="secondary" size="sm" onClick={SearchForProfile}>
          SEARCH
        </Button>
        <FormGroup>
          <Input
            type="search"
            className="guard_profile_search-wrapper_textInput"
            name="search"
            placeholder="Search"
            onChange={(e) => setUserSearchText(e.target.value)}
          />
        </FormGroup>
        <Button color="primary" size="sm" onClick={handleBackButton}>
          BACK
        </Button>
      </div>

      <CardGroup className="profiles-page">
        {Array.isArray(filteredProfiles) && filteredProfiles.map((g) => (
          <div className="guards_profile" key={g.id}>
            <Card>
              <CardBody>
                <CardTitle>
                  <Link to={`/userProfile/details/${g.id}`}>
                    {g.displayName}
                  </Link>
                </CardTitle>
              </CardBody>
              <CardImg width="100%" src={g.imageUrl} alt="Profile Image" />
            </Card>
          </div>
        ))}
      </CardGroup>
     
    </div>
  );
};

