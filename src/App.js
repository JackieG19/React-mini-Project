import React, { Component } from 'react';
import Profile from "./component/Profile";

class App extends Component {
  state = {
    firstname: null,
    lastname: null,
    email: null
  }
  
  handleCLick = () =>{
    console.log("button clicked") // button works
  }
  setFirstName = e => {
    console.log(e.target.value);
    this.setState({
      firstname: e.target.value
    });
  }
  
  render() {
    return (
      <div className="App">
        <Profile/>
        <p>My App</p>
        <input onChange={this.setFirstName} type="text" placeholder="FirstName" />
        <button onClick={this.handleCLick}>submit</button>
      </div>
    );
  }
}

export default App;
