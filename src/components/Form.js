import React from "react";

const Form = props => (
  <div className="wrapper">
    <h1>Create an account</h1>
    <div className="wrapper_form">
      <form onSubmit={props.handleSubmit}>
        {/*------Name Input ------- */}
        <h3>Name:</h3>
        <input
          type="text"
          onChange={props.handleChange}
          name="name"
          placeholder="Enter name"
        />
        {/*------Email Input ------- */}
        <h3>Email:</h3>
        <input
          type="text"
          onChange={props.handleChange}
          name="email"
          placeholder="Enter Email"
        />
        {/*------Phone Input ------- */}
        <h3>Phone:</h3>
        <input
          type="text"
          onChange={props.handleChange}
          name="phone"
          placeholder="Enter phone number"
        />
        {/*------blogURL Input ------- */}
        <h3>BlogURL:</h3>
        <input
          type="text"
          onChange={props.handleChange}
          name="blogURL"
          placeholder="Enter Blog URL"
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
);

export default Form;
