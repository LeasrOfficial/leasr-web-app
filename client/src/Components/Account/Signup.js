import React, { useState } from "react";
import {
  Button,
  FormGroup,
  FormControl,
  Row,
  Col
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormFields } from "../../libs/hooksLib";
import { Auth } from "aws-amplify";

export default function Signup(props) {
  const [fields, handleFieldChange] = useFormFields({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: ""
  });
  const [newUser, setNewUser] = useState(null);

  function validateForm() {
    return (
      fields.firstName.length > 0 &&
      fields.lastName.length > 0 &&
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  function validateConfirmationForm() {
    return fields.confirmationCode.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    try {
      const newUser = await Auth.signUp({
        name: fields.firstName,
        family_name: fields.lastName,
        username: fields.email,
        password: fields.password
      });
      setNewUser(newUser);
    } catch (e) {
      alert(e.message);
    }
  }
  
  async function handleConfirmationSubmit(event) {
    event.preventDefault();
  
    try {
      await Auth.confirmSignUp(fields.email, fields.confirmationCode);
      await Auth.signIn(fields.email, fields.password);
  
      props.userHasAuthenticated(true);
      props.history.push("/");
    } catch (e) {
      alert(e.message);
    }
  }

  function renderConfirmationForm() {
    return (
      <div className="mt-5 mb-5 bg-light rounded mx-auto w-25 auth-wrapper">
        <div className="p-5 auth-inner">
          <form onSubmit={handleConfirmationSubmit}>
            <FormGroup controlId="confirmationCode" bsSize="large">
              <h3>Confirmation Code</h3>
              <FormControl
                autoFocus
                type="tel"
                onChange={handleFieldChange}
                value={fields.confirmationCode}
                className="p-2"
              />
              <p className="text-success p-2">Please check your email for the code.</p>
            </FormGroup>
            <Button
              block
              type="submit"
              bsSize="large"
              disabled={!validateConfirmationForm()}
              className="p-2 pb-0 btn btn-success btn-block"
            >
              Verify
            </Button>
          </form>
        </div>
      </div>
    );
  }

  function renderForm() {
    return (
      <div className="mt-5 mb-5 bg-light rounded mx-auto w-50 auth-wrapper">
        <div className="p-5 auth-inner">
          <form onSubmit={handleSubmit}>
            <h3 className="text-left pb-4">Sign up for an account</h3>

            <FormGroup bsSize="large" className="text-left">
              <h5>First Name</h5>
              <FormControl
                
                placeholder="Enter your name"
                type="text"
                value={fields.firstName}
                onChange={handleFieldChange}
                className="p-2"
              />
            </FormGroup>

            <FormGroup bsSize="large" className="text-left">
              <h5>Family Name</h5>
              <FormControl
                
                placeholder="Enter your family name"
                type="text"
                value={fields.lastName}
                onChange={handleFieldChange}
                className="p-2"
              />
            </FormGroup>

            <FormGroup controlId="email" bsSize="large" className="text-left">
              <h5>Email</h5>
              <FormControl
                autoFocus
                placeholder="Enter your email"
                type="email"
                value={fields.email}
                onChange={handleFieldChange}
                className="p-2"
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large" className="text-left">
              <h5>Password</h5>
              <FormControl
                placeholder="Enter a password"
                type="password"
                value={fields.password}
                onChange={handleFieldChange}
                className="p-2"
              />
            </FormGroup>
            <FormGroup controlId="confirmPassword" bsSize="large" className="text-left">
              <h5>Confirm Password</h5>
              <FormControl
                placeholder="Retype your password"
                type="password"
                onChange={handleFieldChange}
                value={fields.confirmPassword}
                className="p-2"
              />
            </FormGroup>
            <Row className="pt-3 w-100">
              <Col className="w-75 text-left">
                <p className="">
                    Already registered? <Link className="text-success" to="/login">Sign in</Link>
                </p>
              </Col>
              <Col className="ml-auto w-25 align-right">
                <Button
                  type="submit"
                  bsSize="large"
                  disabled={!validateForm()}
                  className="btn btn-success btn-block"
                >
                  Signup
                </Button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="Signup">
      {newUser === null ? renderForm() : renderConfirmationForm()}
    </div>
  );
}