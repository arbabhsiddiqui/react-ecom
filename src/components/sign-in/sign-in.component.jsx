import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I Already have an account </h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit} action="">
          <FormInput
            type="email"
            name="email"
            className="form-control"
            value={this.state.email}
            handelChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            className="form-control"
            handelChange={this.handleChange}
            value={this.state.password}
            required
            label="password"
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;