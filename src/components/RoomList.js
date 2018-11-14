import React, {Component} from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

      this.state = {
      rooms: [],
      roomName: ''
    };

	this.roomsRef = this.props.firebase.database().ref('rooms');
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
	}

componentDidMount () {
	   this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) })
     });
}

handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newRoomName) return
    this.roomsRef.push({ name: this.state.newRoomName })
    this.setState({ newRoomName: ''})
  }

handleChange(e) {
    this.setState({newRoomName: e.target.value });
  }


  render() {
    return (
            <div className='room-list'>
            <section>
            <h1>Room List</h1>
            {this.state.rooms.map((room, index) =>
              <li
                key={index}
                onClick={() => this.props.setActiveRoom(room)}>
                {room.name}
              </li>
          )}
          </section>
          <div id="new-room">
            <form onSubmit={ (e) => this.handleSubmit(e) }>
              <label>
                Room Name:
                <input
                  type="text"
                  placeholder="enter room name"
                  value={this.state.newRoomName}
                  onChange={ (e) => this.handleChange(e) }/>
              </label>
              <input type="submit" value="submit" />
            </form>
        </div>
      </div>
     );
   }
 }


export default RoomList;
