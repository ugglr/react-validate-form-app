import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
import Message from "./components/Message";

class App extends Component {
  state = {
    name: null,
    email: null,
    phone: null,
    blogURL: null,
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
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name = value.length < 3 ? "minimum 3 letters required" : "";
        break;
      case "email":
        formErrors.email = value.length < 3 ? "minimum 3 letters required" : "";
        break;
      case "phone":
        formErrors.phone = value.length < 3 ? "minimum 3 letters required" : "";
        break;
      case "blogURL":
        formErrors.blogURL =
          value.length < 3 ? "minimum 3 letters required" : "";
        break;
      default:
        break;
    }
    await this.setState({ formErrors, [name]: value }, () =>
      console.log(this.state)
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("The submit button was pressed");
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
