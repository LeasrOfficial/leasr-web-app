import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import './App.css';
import Routes from "./Routes";
import {Link} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Logo from './leasr-brand-green.svg';

function App() { 
  return (
    <div className="App">
      <Navbar expand="lg">
        <Navbar.Brand  className="bd-highlight">
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
        <Nav className=" w-25">
            <Link className="text-success pr-4" to="/email-signup">Signup for Mailing</Link>
            <Link className="text-success pr-4" to="/about">About</Link>
            <Link className="text-success pr-4" to="/report-bug">Report a Bug</Link>
        </Nav>
      </Navbar>
      <Routes appProps={{}} />
    </div>
  );
}

export default App;
