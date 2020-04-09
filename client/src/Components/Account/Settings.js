import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div class="mt-5 mb-5 rounded mx-auto w-75 auth-wrapper">
            <div class="p-5 auth-inner">
              <div class="mb-2">
                  <div class="p-2">
                    <a href="" title="Show profile"><img alt="Mitch" class="" src="https://a0.muscache.com/defaults/user_pic-225x225.png?v=3" title="Mitch" width="190" height="190" /></a>
                    <div class="">
                        <a href="" class="">
                          <i class=""></i>
                          Add Profile Photo
                        </a>            
                    </div>
                  </div>
                  <div class="p-2">
                    <h2>
                      FirstName LastName
                    </h2>
                    <Link to="" class="p-2">
                      <Button
                      block
                      bsSize="large"
                      className="p-2 mx-auto w-50 btn btn-success btn-block"
                      >View Profile</Button>
                    </Link>
                    <Link to="/settings/edit" class="p-2">
                      <Button
                        block
                        bsSize="large"
                        className="p-2 mx-auto w-50 btn btn-success btn-block"
                        >Edit Profile</Button>
                    </Link>
                  </div>
              </div>
              <div class="">
                  <div class="">
                    <ListGroup as="ul" class="w-50 mx-auto">
                      <h2>
                        Quick Links
                      </h2>
                    </ListGroup>
                    <Link to="" class="p-2">
                      <Button
                      block
                      bsSize="large"
                      className="p-2 mx-auto w-50 btn btn-success btn-block"
                      >All Messages</Button>
                    </Link>
                    <Link to="" class="p-2">
                      <Button
                        block
                        bsSize="large"
                        className="p-2 mx-auto w-50 btn btn-success btn-block"
                      >Becoming a Leasr</Button>
                    </Link>
                    <Link to="" class="p-2">
                      <Button
                        block
                        bsSize="large"
                        className="p-2 mx-auto w-50 btn btn-success btn-block"
                      >Becoming a SubLeasr</Button>
                    </Link>
                    <Link to="" class="p-2">
                      <Button
                        block
                        bsSize="large"
                        className="p-2 mx-auto w-50 btn btn-success btn-block"
                      >Get Help</Button>
                    </Link>
                  </div>
              </div>
            </div>
        </div>
    );
  }
}

// <div className="mt-5 mb-5 bg-light rounded mx-auto w-25 auth-wrapper">
//         <div className="p-5 auth-inner">
//           <h2>Account</h2>
//           <Link to="/settings/email" className="p-2">
//             <Button
//               block
//               bsSize="large"
//               className="p-2 btn btn-success btn-block"
//             >Change Email</Button>
//           </Link>
//           <Link to="/settings/password" className="p-2">
//             <Button
//               block
//               bsSize="large"
//               className="p-2 pb-0 btn btn-success btn-block"
//             >Change Password</Button>
//           </Link>
//         </div>
//       </div>