import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import {
  FormGroup,
  Button,
  FormControl,
  FormLabel
} from "react-bootstrap";

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: "",
      email: "",
      password: "",
      codeSent: false,
      confirmed: false,
      confirmPassword: "",
      isConfirming: false,
      isSendingCode: false
    };
  }

  validateCodeForm() {
    return this.state.email.length > 0;
  }

  validateResetForm() {
    return (
      this.state.code.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSendCodeClick = async event => {
    event.preventDefault();

    this.setState({ isSendingCode: true });

    try {
      await Auth.forgotPassword(this.state.email);
      this.setState({ codeSent: true });
    } catch (e) {
      alert(e.message);
      this.setState({ isSendingCode: false });
    }
  };

  handleConfirmClick = async event => {
    event.preventDefault();

    this.setState({ isConfirming: true });

    try {
      await Auth.forgotPasswordSubmit(
        this.state.email,
        this.state.code,
        this.state.password
      );
      this.setState({ confirmed: true });
    } catch (e) {
      alert(e.message);
      this.setState({ isConfirming: false });
    }
  };

  renderRequestCodeForm() {
    return (
        <div className="mt-5 mb-5 bg-light rounded mx-auto w-25 auth-wrapper">
            <div className="p-5 auth-inner">
                <form onSubmit={this.handleSendCodeClick}>
                    <h3>Send Confirmation</h3>
                    <FormGroup bsSize="large" controlId="email">
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            className="p-2"
                        />
                    </FormGroup>
                    <Button
                        block
                        type="submit"
                        bsSize="large"
                        loadingText="Sending…"
                        isLoading={this.state.isSendingCode}
                        disabled={!this.validateCodeForm()}
                        className="p-2 pb-0 btn btn-success btn-block"
                    >Send Confirmation</Button>
                </form>
            </div>
        </div>
    );
  }

  renderConfirmationForm() {
    return (
        <div className="mt-5 mb-5 bg-light rounded mx-auto w-25 auth-wrapper">
            <div className="p-5 auth-inner">
                <form onSubmit={this.handleConfirmClick}>
                    <h3>Forgot Password</h3>
                    <FormGroup bsSize="large" controlId="code">
                        <FormLabel>Confirmation Code</FormLabel>
                        <FormControl
                            autoFocus
                            type="tel"
                            value={this.state.code}
                            onChange={this.handleChange}
                            className="p-2"
                        />
                        <p>
                            Please check your email ({this.state.email}) for the confirmation
                            code.
                        </p>
                        </FormGroup>
                        <hr />
                        <FormGroup bsSize="large" controlId="password">
                        <FormLabel>New Password</FormLabel>
                        <FormControl
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            className="p-2"
                        />
                        </FormGroup>
                        <FormGroup bsSize="large" controlId="confirmPassword">
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl
                            type="password"
                            onChange={this.handleChange}
                            value={this.state.confirmPassword}
                            className="p-2"
                        />
                    </FormGroup>
                    <Button
                        block
                        type="submit"
                        bsSize="large"
                        loadingText="Confirm…"
                        isLoading={this.state.isConfirming}
                        disabled={!this.validateResetForm()}
                        className="p-2 pb-0 btn btn-success btn-block"
                    >Confirm</Button>
                </form>
            </div>
        </div>
    );
  }

  renderSuccessMessage() {
    return (
      <div className="success">
        {/* <Glyphicon glyph="ok" /> */}
        <p>Your password has been reset.</p>
        <p>
          <Link to="/login">
            Click here to login with your new credentials.
          </Link>
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="ResetPassword">
        {!this.state.codeSent
          ? this.renderRequestCodeForm()
          : !this.state.confirmed
            ? this.renderConfirmationForm()
            : this.renderSuccessMessage()}
      </div>
    );
  }
}