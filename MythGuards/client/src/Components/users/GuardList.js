import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetGuardProfilesList } from "../../modules/userProfileManager";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardImg,
  CardGroup,
} from "reactstrap";
import "../CSS/profileList.css";
import { GuardSearch } from "../../modules/userProfileManager";
import { FormGroup, Input } from "reactstrap";

export const GuardList = () => {
  const [guardProfiles, setGuardProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [userSearchText, setUserSearchText] = useState("");
  const SearchForGuard = () => {
    GuardSearch(userSearchText).then(setFilteredProfiles);
  }

  useEffect(() => {
    setFilteredProfiles (guardProfiles)}, [guardProfiles]);

  useEffect(() => {
    GetGuardProfilesList().then((usersData) => {
      setGuardProfiles(usersData);
    });
  }, []);

  const handleBackButton = () => { 
    setFilteredProfiles(guardProfiles)
    
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
        <Button  color="secondary" size="sm" onClick={SearchForGuard}>
          SEARCH
        </Button>
        <FormGroup>
          <Input
            type="search"
            className="guard_profile_search-wrapper_textInput mx-2"
            name="search"
            placeholder="Guard Search"
            onChange={(e) => setUserSearchText(e.target.value)}
          />
        </FormGroup>
        <Button className="mx-3" outline color="secondary" size="sm" onClick={handleBackButton}>
         SHOW ALL
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
