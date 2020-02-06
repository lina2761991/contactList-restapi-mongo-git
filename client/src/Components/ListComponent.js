import React, { Component } from "react";
import ContactComponent from "./ContactComponent";
import axios from "axios";

export default class ContactListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      item: {}
    };
  }
  getAll = () => {
    axios
      .get("http://localhost:5000/all")
      .then(response => {
        this.setState({ arr: response.data });
        console.log("arrayt" + this.arr);
      })
      .catch(function(error) {
        // handle error
        console.log("this is an " + error);
      });
  };

  componentDidMount() {
    this.getAll();
  }

  componentDidUpdate() {
    this.getAll();
  }
  deleteItemHandler = id => {
    const updatedar = this.state.arr.filter(el => el.id !== id);
    this.setState({ arr: updatedar });
    console.log(this.state.arr);
    this.getAll();
  };

  render() {
    return (
      <div className="col-4">
        {this.state.arr.map(el => {
          return (
            <ContactComponent
              name={el.name}
              email={el.email}
              telephone={el.telephone}
              id={el._id}
              key={el._id}
              deleteItem={this.deleteItemHandler}
              GetItem={this.props.getItemHandler}
            />
          );
        })}
      </div>
    );
  }
}
