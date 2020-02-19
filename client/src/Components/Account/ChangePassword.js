import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      oldPassword: "",
      isChanging: false,
      confirmPassword: ""
    };
  }

  validateForm() {
    return (
      this.state.oldPassword.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleChangeClick = async event => {
    event.preventDefault();

    this.setState({ isChanging: true });

    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(
        currentUser,
        this.state.oldPassword,
        this.state.password
      );

      this.props.history.push("/settings");
    } catch (e) {
      alert(e.message);
      this.setState({ isChanging: false });
    }
  };

  render() {
    return (
        <div className="mt-5 mb-5 bg-light rounded mx-auto w-25 auth-wrapper">
            <div className="p-5 auth-inner">
                <form onSubmit={this.handleChangeClick}>
                    <h3>Change Password</h3>

                    <FormGroup bsSize="large" controlId="oldPassword">
                        <FormLabel>Old Password</FormLabel>
                        <FormControl
                        type="password"
                        onChange={this.handleChange}
                        value={this.state.oldPassword}
                        />
                    </FormGroup>
                    <hr />
                    <FormGroup bsSize="large" controlId="password">
                        <FormLabel>New Password</FormLabel>
                        <FormControl
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup bsSize="large" controlId="confirmPassword">
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl
                        type="password"
                        onChange={this.handleChange}
                        value={this.state.confirmPassword}
                        />
                    </FormGroup>
                    <Button
                        block
                        type="submit"
                        bsSize="large"
                        loadingText="Changing…"
                        disabled={!this.validateForm()}
                        isLoading={this.state.isChanging}
                        className="p-2 pb-0 btn btn-success btn-block"
                    >Change Password</Button>
                </form>
            </div>
        </div>
    );
  }
}