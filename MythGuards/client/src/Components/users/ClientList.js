import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardGroup, CardImg, CardTitle, FormGroup, Input } from "reactstrap";
import { ClientSearch, GetClientProfilesList } from "../../modules/userProfileManager";
import "../CSS/profileList.css";

export const ClientList = () => {
  const [clientProfiles, setClientProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [userSearchText, setUserSearchText] = useState("");
  const SearchForClient = () => {
    ClientSearch(userSearchText).then(setFilteredProfiles);
  }

  useEffect(() => {
    setFilteredProfiles(clientProfiles);
  }, [clientProfiles]);

  useEffect(() => {
    GetClientProfilesList().then((usersData) => {
      setClientProfiles(usersData);
    });
  }, []);

  const handleBackButton = () => {
    setFilteredProfiles(clientProfiles);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0
    })
   }
   
  return (
    <div className="profiles-page-all">
        <Button color= "primary" size="sm" className="topOfPage" onClick= {scrollUp}>Top Of Page</Button>  
      <div className="guard_profile_search-wrapper">
        <Button color="secondary" size="sm" onClick={SearchForClient}>
          SEARCH
        </Button>
        <FormGroup>
          <Input
            type="search"
            className="guard_profile_search-wrapper_textInput"
            name="search"
            placeholder="Client Search"
            onChange={(e) => setUserSearchText(e.target.value)}
          />
        </FormGroup>
        <Button color="primary" size="sm" onClick={handleBackButton}>
          BACK
        </Button>
      </div>

      <CardGroup className="profiles-page">
        {Array.isArray(filteredProfiles) &&
          filteredProfiles.map((g) => (
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
