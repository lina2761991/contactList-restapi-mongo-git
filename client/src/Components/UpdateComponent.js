import React, { Component } from "react";
import contacts from "../data.js";
import axios from "axios";
import  useParams  from "react-router-dom";

export default class UpdateComponent extends Component {
   
  constructor(props) {
    super(props);
    this.state = {
      id: props.item.id,
      inputValueName: props.item.name,
      inputValueTelephone: props.item.telephone,
      inputValueEmail: props.item.email
    };
  }

  //{ this.state.id } = useParams();
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

  update = () => {
    let name = this.state.inputValueName;
    let email = this.state.inputValueEmail;
    let telephone = this.state.inputValueTelephone;
    axios
      .put("http://localhost:5000/update/" + this.state.id, {
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
      console.log(this.props)

      this.props.history.push(`/List`);
  };

  render() {
    return (
      <div className="col-4">
        <h6>Edit A Contact</h6>
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
        <button onClick={this.update}>update</button>
      </div>
    );
  }
}
