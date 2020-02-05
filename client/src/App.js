import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import AddComponent from "./Components/AddComponent.js";
import UpdateComponent from "./Components/UpdateComponent.js";
import ListComponent from "./Components/ListComponent.js";
import contacts from "./data.js";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }
  getItemHandler = obj => {
    this.setState({ item: obj });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="col-6">
          <h6>Contact App</h6>

          <NavLink to="/addContact">
            <button>Add Contact</button>
          </NavLink>

          <NavLink to="/List">
            <button>Show List</button>
          </NavLink>
          <Switch>
            <Route path="/addContact" component={AddComponent} />
            <Route
              path="/List"
              render={props => (
                <ListComponent
                  {...props}
                  getItemHandler={this.getItemHandler}
                />
              )}
            />
            <Route
              path= "/updateContact/"
             // path=`/updateContact/${{this.props.id.match.params}}`
              render={props => (
                <UpdateComponent {...props} item={this.state.item} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
