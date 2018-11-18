import React, { Component } from 'react';

class User extends Component {
  constructor (props) {
    super(props);
    this.state ={
    	username: ''
    };
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged((user) => {
    this.props.setUser(user);
    });
  }

signIn() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
  }

  signOut() {
    this.props.firebase.auth().signOut().then(() => {
    this.props.setUser(null);
    })
  }

render() {
      const currentUser = this.props.user === null ? "Guest" : this.props.user.displayName
    return (
    	<div>
        	<p>Signed in as: {currentUser}</p>
                  <button onClick={this.signIn}>Sign in</button>
                  <button onClick={this.signOut}>Sign out</button>
      </div>
    )
  }
}

export default User;