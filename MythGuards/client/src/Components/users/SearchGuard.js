import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { GuardSearch } from "../../modules/userProfileManager";
import "../CSS/guardCard.css";

export const SearchGuards = () => {
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [userSearchText, setUserSearchText] = useState("");
  const SearchForGuard = () => {
    GuardSearch(userSearchText).then(setFilteredProfiles);
  }

  return (
    <div className="profile-page">
      <div className="guard_profile_search-wrapper">
        <FormGroup>
          <Input type="search" name="search" placeholder="Guard Search"  onChange={(e) => setUserSearchText(e.target.value)} />
        </FormGroup>
        <Button outline color="secondary" size="sm" onClick={ SearchForGuard }>SEARCH</Button>
      </div>

      {Array.isArray(filteredProfiles) &&
        filteredProfiles.map((g) => (
          <div className="guard_profile" key={g.id}>
            <div>
              <Link to={`/userProfile/details/${g.id}`}>{g.displayName}</Link>
            </div>
            <img src={g.imageUrl} alt={"Profile"} />
            <div className="guard_profile_items">
              <span>Age </span> : {g.age}'
            </div>
            <div className="guard_profile_items">
              <span>Email </span> : {g.email}
            </div>
            <div className="guard_profile_items">
              <span>Phone Number </span>: {g.phoneNumber}'
            </div>
            <div className="guard_profile_items">
              <span>Join Date </span>: {g.joinDate}
            </div>
          </div>
        ))}
    </div>
  );
};
