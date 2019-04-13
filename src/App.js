import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
import Message from "./components/Message";

class App extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    blogURL: "",
    formErrors: {
      name: "",
      email: "",
      phone: "",
      blogURL: ""
    },
    isNameValid: false,
    isEmailValid: false,
    isPhoneValid: false,
    isBlogURLValid: false
  };

  handleChange = async e => {
    e.preventDefault();
    //Add the information from the form to the state
    let { name, value } = e.target;

    await this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("The submit button was pressed");
    //We want to validate upon the pressing of the submit button
    this.validate();
  };

  validate = async () => {
    let { name, email, phone, blogURL } = this.state;
    let formErrors = { ...this.state.formErrors };

    formErrors.name = await this.validateName(name);
    formErrors.email = await this.validateEmail(email);
    formErrors.phone = await this.validatePhone(phone);
    formErrors.blogURL = await this.validateBlogURL(blogURL);

    this.setState({ formErrors });

    if (
      this.state.isNameValid &&
      this.state.isEmailValid &&
      this.state.isPhoneValid &&
      this.state.isBlogURLValid
    ) {
      console.log("Form was submitted successfully!");
    } else {
      console.log("Form was validated with errors");
      console.log(this.state);
    }
  };

  validateName = name => {
    console.log("validating name");
    if (name.length > 2) {
      this.setState({ isNameValid: true });
      return "";
    } else {
      this.setState({ isNameValid: false });
      return "Name  needs to be longer than 3 letters";
    }
  };

  validateEmail = email => {
    console.log("validating email");
    if (email.length > 2) {
      this.setState({ isEmailValid: true });
      return "";
    } else {
      this.setState({ isEmailValid: false });
      return "Email needs to be longer than 3 letters";
    }
  };

  validatePhone = phone => {
    console.log("validating phone");
    if (phone.length > 2) {
      this.setState({ isPhoneValid: true });
      return "";
    } else {
      this.setState({ isPhoneValid: false });
      return "Phone needs to be longer than 3 letters";
    }
  };

  validateBlogURL = blogURL => {
    console.log("validating blogURL");
    if (blogURL.length > 2) {
      this.setState({ isBlogURLValid: true });
      return "";
    } else {
      this.setState({ isBlogURLValid: false });
      return "BlogURL needs to be longer than 3 letters";
    }
  };

  render() {
    return (
      <div className="App">
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Message formErrors={this.state.formErrors} />
      </div>
    );
  }
}

export default App;
