import React from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useFormFields } from "../../libs/hooksLib";

export default function Login(props) {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    try {
      await Auth.signIn(fields.email, fields.password);
      props.userHasAuthenticated(true);
      props.history.push("/");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="mt-5 mb-5 bg-light rounded mx-auto w-25 auth-wrapper">
      <div className="p-5 auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
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
              value={fields.password}
              onChange={handleFieldChange}
              type="password"
              className="p-2"
            />
          </FormGroup>
          <Button block bsSize="large" className="p-2 pb-0 btn btn-success btn-block" disabled={!validateForm()} type="submit">
            Login
          </Button>

          <p className="forgot-password text-right text-success">
              <Link className="text-success" to="/login/reset">Forgot password?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}