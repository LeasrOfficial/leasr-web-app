import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import './App.css';
import Routes from "./Routes";
import {Link} from 'react-router-dom';
import { Navbar, NavItem } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Logo from './leasr-brand-green.svg';

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    setIsAuthenticating(false);
  }
  
  async function handleLogout() {
    await Auth.signOut();
  
    userHasAuthenticated(false);
  }
  
  return (
    !isAuthenticating &&
    <div className="App">
      <Navbar expand="lg">
          <Nav className="mr-auto w-25">
              <Link className="text-success pr-4" to="/">Manage Leases</Link>
              <Link className="text-success pr-4" to="/">Help</Link>
              <Link className="text-success pr-4" to="/about">About</Link>
          </Nav>

          <Navbar.Brand  className="mx-auto w-50 bd-highlight">
              <Link exact to="/">
                  <img
                      alt="LEASR"
                      src={Logo}
                      width="60"
                      height="60"
                      className="d-inline-block align-top rounded"
                  />
              </Link>
          </Navbar.Brand>
          <Nav className="ml-auto w-25">
              <Link className="pl-4 text-success ml-auto">Create Listing</Link>
              {isAuthenticated
                ? <>
                    <Link className="pl-4 text-success" to="/settings"><NavItem>Settings</NavItem></Link>
                    <Link className="pl-4 text-success" to="/"><NavItem onClick={handleLogout}>Logout</NavItem></Link>
                  </>
                : <>
                    <Link className="pl-4 text-success" to="/login"><NavItem>Login</NavItem></Link>
                    <Link className="pl-4 text-success" to="/signup"><NavItem>Signup</NavItem></Link>
                  </>
              }
          </Nav>
      </Navbar>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    </div>
  );
}

export default App;
