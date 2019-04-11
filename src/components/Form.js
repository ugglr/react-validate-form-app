import React, { Component } from "react";

const nameReg = new RegExp(
  "/^(([A-Za-z]+[-']?)*([A-Za-z]+)?s)+([A-Za-z]+[-']?)*([A-Za-z]+)?$/"
);
const emailReg = new RegExp("/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/");
const phoneReg = new RegExp(
  "/^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im"
);
const blogURLReg = RegExp(
  "https ?: //(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,}"
);

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    //if we have an error set valid to false
    val.length > 0 && (valid = false);
  });
  return valid;
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      blogURL: "",
      formErrors: {
        name: "",
        email: "",
        phone: "",
        blogURL: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(`
            ---Submit---
            name: ${this.state.name}
            email: ${this.state.email}
            phone: ${this.state.phone}
            blogURL: ${this.state.blogURL}
            `);
    } else {
      console.error("Invalid Form");
    }
  };

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    //We do not want to modify the state directly
    let formErrors = this.state.formErrors;

    switch (name) {
      case "name":
        formErrors.name =
          nameReg.test(value) && value.length > 0 ? "" : "invalid name";
        break;
      case "email":
        formErrors.email =
          emailReg.test(value) && value.length > 0 ? "" : "invalid email";
        break;
      case "phone":
        formErrors.phone =
          phoneReg.test(value) && value.length > 0
            ? ""
            : "invalid phone number";
        break;
      case "blogURL":
        formErrors.blogURL =
          blogURLReg.test(value) && value.length > 0 ? "" : "invalid url";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <h1>Create an account</h1>
        <div className="wrapper_form">
          <form onSubmit={this.handleSubmit} noValidate>
            <h3>Name:</h3>
            <input
              type="text"
              noValidate
              name="name"
              placeholder="name"
              onChange={this.handleChange}
            />
            {formErrors.name.length > 0 && <span>{formErrors.name}</span>}
            <h3>Email:</h3>
            <input
              type="text"
              noValidate
              name="email"
              placeholder="email"
              onChange={this.handleChange}
            />
            <h3>Phone:</h3>
            <input
              type="text"
              noValidate
              name="phone"
              placeholder="phone"
              onChange={this.handleChange}
            />
            <h3>BlogURL:</h3>
            <input
              type="text"
              noValidate
              name="blogURL"
              placeholder="blogURL"
              onChange={this.handleChange}
            />
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
