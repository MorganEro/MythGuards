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
  ModalBody,
  Modal,
} from "reactstrap";
import { Logout } from "../../modules/authManager";
import Login from "../authorize/Login";

export default function Header({ isLoggedIn, user }) {
  const toggle = () => setIsOpen(!isOpen);
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar fixed="top" color="light" light expand="lg">
        <NavbarToggler onClick={toggle} />
        {isLoggedIn ? (
          <div>
            <NavbarBrand tag={RRNavLink} to="/">
              MythGuards
            </NavbarBrand>
            <NavbarBrand>Welcome, {user?.displayName}</NavbarBrand>
          </div>
        ) : (
          <NavbarBrand tag={RRNavLink} to="/">
            MythGuards
          </NavbarBrand>
        )}

        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="mx-auto">
            {isLoggedIn && (
              <>
                <NavItem className="mx-3">
                  <NavLink tag={RRNavLink} to="/userProfile/all">
                    AllUsers
                  </NavLink>
                </NavItem>
                <NavItem className="mx-3">
                  <NavLink tag={RRNavLink} to="/userProfile/guard">
                    Guards
                  </NavLink>
                </NavItem>
                <NavItem className="mx-3">
                  <NavLink tag={RRNavLink} to="/userProfile/client">
                    Clients
                  </NavLink>
                </NavItem>
                <NavItem className="mx-3">
                  <NavLink tag={RRNavLink} to="/contract/list">
                    Contracts
                  </NavLink>
                </NavItem>

                <NavItem className="mx-4">
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
            )}
            {!isLoggedIn && (
              <>
                <NavItem>
                  <a
                  aria-current="page"
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={Toggle}
                  >
                  Login
                  </a>
                  <Modal isOpen={modal} toggle={Toggle}>
                    <ModalBody>
                      <Login />
                    </ModalBody>
                  </Modal>
                </NavItem>
                <NavItem className="mx-3">
                  <NavLink tag={RRNavLink} to="register">
                    Register
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
