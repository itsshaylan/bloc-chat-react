import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

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
  render() {
    return (
      <div className="App">
      <h1> Bloc Chat </h1>
      <RoomList firebase={firebase} />
      </div>

    );
  }
}

export default App;
