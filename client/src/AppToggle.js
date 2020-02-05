import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import AddComponent from "./Components/AddComponent.js";
import ListComponent from "./Components/ListComponent.js";
import contacts from'./data.js'

class AppToggle extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      AddContact:false,
      ShowContact:false ,
      contacts: contacts
     };
  }

  toggleAdd = () => {
    this.setState({
      
      AddContact: !this.state.AddContact,
      
    })
  };

  toggleList = () => {
    this.setState({    
      ShowContact: !this.state.ShowContact
    });
  }



  updateArray=(array)=>{
    console.log(this.state)
    this.setState({
      contacts: array
      
    })
  }

  delete=(id)=>{
    // this.setState({
    //       contacts : this.state.contacts.filter(ele=>ele !==this.state.contacts )
      
    //   })
  let arr=  this.state.contacts.filter(el=>el.id ===id);
  //this.updateArray(arr)
  console.log(arr)
}

  render() {
    return (
      <div className='col-6'>
        <h6>Contact App</h6>
    
      
          <button onClick={this.toggleAdd} >Add Contact</button>
      
        {this.state.AddContact && <AddComponent updateArray ={this.updateArray} />}


        <button onClick={this.toggleList} >Show Listt</button>


        {this.state.ShowContact && <ListComponent contacts={this.state.contacts} updateArray ={this.updateArray} handleDelete={this.delete}/>}
      
      </div>
    );
  }
}

export default AppToggle;
