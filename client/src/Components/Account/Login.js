import React from "react";
import { Button, FormGroup, FormControl, Row, Col } from "react-bootstrap";
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
    <div className="mt-5 mb-5 bg-light rounded mx-auto w-50 auth-wrapper">
      <div className="p-5 auth-inner">
        <form onSubmit={handleSubmit}>
          <h3 className="text-left pb-4">Sign in to your account</h3>
          <FormGroup controlId="email" bsSize="large" className="text-left">
            <h5>Email *</h5>
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
          <h5>Password *</h5>
            <FormControl
              placeholder="Enter your password"
              value={fields.password}
              onChange={handleFieldChange}
              type="password"
              className="p-2"
            />
          </FormGroup>
          <p className="text-left">
              Forgot your password? <Link className="text-success" to="/login/reset">Reset password</Link>
          </p>
          <Row className="pt-3 w-100">
            <Col className="w-75 text-left mr-auto">
              <p>
                  No account? <Link className="text-success" to="/signup">Create Account</Link>
              </p>
            </Col>
            <Col className="ml-auto w-25 align-right p-0">
              <Button bsSize="large" className=" btn btn-success btn-block" disabled={!validateForm()} type="submit">
                Login
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
}