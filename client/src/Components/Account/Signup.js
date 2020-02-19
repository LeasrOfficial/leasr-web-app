import React, { useState } from "react";
import {
  Button,
  FormGroup,
  FormControl,
  FormLabel
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormFields } from "../../libs/hooksLib";
import { Auth } from "aws-amplify";

export default function Signup(props) {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: ""
  });
  const [newUser, setNewUser] = useState(null);

  function validateForm() {
    return (
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
              <FormLabel>Confirmation Code</FormLabel>
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
      <div className="mt-5 mb-5 bg-light rounded mx-auto w-25 auth-wrapper">
        <div className="p-5 auth-inner">
          <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
          
            <FormGroup controlId="email" bsSize="large">
              <FormLabel>Email</FormLabel>
              <FormControl
                autoFocus
                type="email"
                value={fields.email}
                onChange={handleFieldChange}
                className="p-2"
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <FormLabel>Password</FormLabel>
              <FormControl
                type="password"
                value={fields.password}
                onChange={handleFieldChange}
                className="p-2"
              />
            </FormGroup>
            <FormGroup controlId="confirmPassword" bsSize="large">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl
                type="password"
                onChange={handleFieldChange}
                value={fields.confirmPassword}
                className="p-2"
              />
            </FormGroup>
            <Button
              block
              type="submit"
              bsSize="large"
              disabled={!validateForm()}
              className="p-2 pb-0 btn btn-success btn-block"
            >
              Signup
            </Button>

            <p className="forgot-password text-success text-right">
                <Link className="text-success" to="/login">Already registered? Sign in</Link>
            </p>
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