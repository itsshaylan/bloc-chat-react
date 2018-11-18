import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';


  var config = {
    apiKey: "AIzaSyDi8Le6Hc3F-Adn42lF5SP2wv-pcAoeKLs",
    authDomain: "bloc-chat-react-c55d5.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-c55d5.firebaseio.com",
    projectId: "bloc-chat-react-c55d5",
    storageBucket: "bloc-chat-react-c55d5.appspot.com",
    messagingSenderId: "133034382442"
  };
  firebase.initializeApp(config);


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    activeRoom: '',
    activeUser: ''
    };
    this.setActiveRoom = this.setActiveRoom.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  setActiveRoom(room){
    this.setState({
    activeRoom: room
    })
    console.log(this.state.activeRoom)
  }

 setUser(user) {
    this.setState({ activeUser: user });
  }


  render() {
    return (
      <div className="App">
      <h1> Bloc Chat </h1>
      <User firebase={firebase} setUser={this.setUser} user={this.state.activeUser} />
      <RoomList firebase={firebase} 
      activeRoom={this.state.activeRoom}
      setActiveRoom={this.setActiveRoom}
      />
      <MessageList 
      firebase={firebase}
      activeRoom={this.state.activeRoom}
      user={this.state.activeUser}
      setUser={this.setUser}
              />

      </div>

    );
  }
}

export default App;
