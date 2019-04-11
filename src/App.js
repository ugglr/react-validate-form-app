import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
import Message from "./components/Message";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Message />
      </div>
    );
  }
}

export default App;
