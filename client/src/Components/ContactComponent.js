import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Route, NavLink, Link } from "react-router-dom";
import UpdateComponent from "./UpdateComponent";

export default class ContactComponent extends Component {

  GetContact = () => {
    console.log("hey");
  };

  render() {
    return (
      <div className="col-4">
        <div>
          <h4>Name:{this.props.name}</h4>
          <h4>telephone:{this.props.telephone}</h4>
          <h4>Email:{this.props.email}</h4>
          <button
            onClick={() => {
              this.props.GetItem(this.props);
              console.log(this.props);
            }}
          >
            <Link to="/updateContact/">Update</Link>
          </button>

          <button
            onClick={() =>
              axios
                .delete("http://localhost:5000/delete/" + this.props.id)
                .then(() => this.props.deleteItem(this.props.id))
                .catch(err => console.log(err))
            }
          >
            Delete
          </button>

          <hr></hr>
        </div>
      </div>
    );
  }
}
