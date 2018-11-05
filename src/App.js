import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';


<script src="https://www.gstatic.com/firebasejs/5.5.7/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDi8Le6Hc3F-Adn42lF5SP2wv-pcAoeKLs",
    authDomain: "bloc-chat-react-c55d5.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-c55d5.firebaseio.com",
    projectId: "bloc-chat-react-c55d5",
    storageBucket: "bloc-chat-react-c55d5.appspot.com",
    messagingSenderId: "133034382442"
  };
  firebase.initializeApp(config);
</script>

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
