import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Logout } from "../../modules/authManager";

export default function Header({ isLoggedIn, user }) {
  const toggle = () => setIsOpen(!isOpen);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar fixed="top" color="light" light expand="lg">
        <NavbarToggler onClick={toggle} />
        {isLoggedIn &&
          <>
            <Collapse isOpen={isOpen} navbar>
              <div>
                <NavbarBrand tag={RRNavLink} to="/">
                  MythGuards
                </NavbarBrand>
                <NavbarBrand>Welcome, {user?.displayName}</NavbarBrand>
              </div>
              {user.serviceTypeId === 1 ? (
                <Nav justified navbar>
                  <>
                    <NavItem>
                      <NavLink tag={RRNavLink} to="/userProfile/guard">
                        Guards
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={RRNavLink} to="/contract/create">
                        ContractForm
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={RRNavLink} to="/contract">
                        Contracts
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={RRNavLink} to="/userProfile/all">
                        AllUsers
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={RRNavLink} to="/userProfile/client">
                        Clients
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <a
                        aria-current="page"
                        className="nav-link"
                        style={{ cursor: "pointer" }}
                        onClick={Logout}
                      >
                        Logout
                      </a>
                    </NavItem>
                  </>
                </Nav>
              ) : (
                <Nav justified navbar>
                  <>
                    <NavItem>
                      <NavLink tag={RRNavLink} to="/userProfile/guard">
                        Guards
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={RRNavLink} to="/contract/create">
                        ContractForm
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={RRNavLink} to="/contract">
                        Contracts
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <a
                        aria-current="page"
                        className="nav-link"
                        style={{ cursor: "pointer" }}
                        onClick={Logout}
                      >
                        Logout
                      </a>
                    </NavItem>
                  </>
                </Nav>
              )}
            </Collapse>
          </>
        }
        {!isLoggedIn &&
        <>
        <Nav justified navbar>
        <NavbarBrand tag={RRNavLink} to="/">
            MythGuards
          </NavbarBrand>
           <NavItem>
           <NavLink tag={RRNavLink} to="/userProfile/guard">
             Guards
           </NavLink>
         </NavItem>

        </Nav>
        </>
          
          
        }
      </Navbar>
    </div>
  );
}
