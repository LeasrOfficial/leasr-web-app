import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
        <div className="mt-5 mb-5 bg-light rounded mx-auto w-25 auth-wrapper">
            <div className="p-5 auth-inner">
                <h2>Account</h2>
                <Link to="/settings/edit/email" className="p-2">
                    <Button
                    block
                    bsSize="large"
                    className="p-2 btn btn-success btn-block"
                    >Change Email</Button>
                </Link>
                <Link to="/settings/edit/password" className="p-2">
                    <Button
                    block
                    bsSize="large"
                    className="p-2 pb-0 btn btn-success btn-block"
                    >Change Password</Button>
                </Link>
            </div>
        </div>
    );
  }
}

