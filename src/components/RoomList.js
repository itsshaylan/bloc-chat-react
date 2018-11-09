import React, {Component} from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

      this.state = {
      rooms: [],
      roomName: ''
    };

	this.roomsRef = this.props.firebase.database().ref('rooms');
	}

componentDidMount () {
	   this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) })
     });
}

createRoom(newRoomName){
    this.roomsRef.push({
        name:newRoomName
      });
    this.setState({newRoomName:''});
    }

handleChange(e) {
    this.setState({newRoomName: e.target.value });
  }

  render() {
    return (
    	<div>
            <ul className='roomList'>
            {this.state.rooms.map( ( room  ) =>
             <li key={room.key}>{room.name}</li>
               )}
            </ul>
            <form onSubmit={e=>{e.preventDefault();this.createRoom(this.state.newRoomName)}}>
            <input type = "text" placeholder="Create new room" value={this.state.newRoomName} onChange={(e)=> this.handleChange(e)}/>
            <button className="adding_rooms_button">Create</button>
            </form>
         </div>
     );
   }
 }


export default RoomList;
