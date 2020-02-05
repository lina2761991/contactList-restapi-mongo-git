import React, { Component } from "react";
import contacts from "../data.js";
import axios from "axios";

export default class AddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts,
      inputValueName: "",
      inputValueTelephone: "",
      inputValueEmail: ""
    };
  }

  updateInputValueName = evt => {
    this.setState({
      inputValueName: evt.target.value
    });
  };

  updateInputValueTelephone = evt => {
    this.setState({
      inputValueTelephone: evt.target.value
    });
  };

  updateInputValueEmail = evt => {
    this.setState({
      inputValueEmail: evt.target.value
    });
  };

  AddContact = () => {
    let name = this.state.inputValueName;
    let email = this.state.inputValueEmail;
    let telephone = this.state.inputValueTelephone;
    axios
      .post("http://localhost:5000/add_contact", {
        name: name,
        email: email,
        telephone: telephone
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
      this.props.history.push(`/List`);
  };

  render() {
    return (
      <div className="col-4">
        <h6>Add A new Contact</h6>
        Name :
        <input
          type="text"
          value={this.state.inputValueName}
          onChange={this.updateInputValueName}
        ></input>
        Telephone :
        <input
          type="text"
          value={this.state.inputValueTelephone}
          onChange={this.updateInputValueTelephone}
        ></input>
        Email :
        <input
          type="text"
          value={this.state.inputValueEmail}
          onChange={this.updateInputValueEmail}
        ></input>
        <button onClick={this.AddContact}>Add Contact</button>
      </div>
    );
  }
}
