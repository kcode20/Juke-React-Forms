'use strict';

import React from 'react';
import { Link } from 'react-router';
//A New Playlist form is going to have input 
const PlaylistMiniContainer = function (Playlist) {
  return class extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        typedInputValue: ''
      }
    }

    someBehavior () {}

    render () {
      const handleSubmit = this.props.handleSubmit;
    /** Remember our separation of concerns between stateful and presentational components.
        The higher order component's render function should only return the inner component
        decorated with any props the higher order component received and any state/behavior
        that it's managing. 
        Note that "{...this.props}" and "{...this.state}" is just shorthand for passing all
        of the props and state (it's the same as using the spread operator to apply an array 
        into a function's arguments) */

//Stuff from our Old Code we might integrate:
/*
function upDateStateWhenChanged(inputValue){
  this.setState({
    typedInputValue: inputValue
  });
  }

*/

//Why a mini-container? Why don't we just handle everything in our container
// Altering methods from the Playlist Container to the Playlist Mini-Container
//
      return (
        <Playlist
          someBehavior={this.someBehavior}
          {...this.props}
          {...this.state}/>
      )
    }
  }
}



export default class Playlist extends React.Component{
  render(){
     
      return (
      <div>
        <h3>Playlist</h3>
         <input type="text" 
              onChange={() => {
                upDateStateWhenChanged(this.newPlaylistName.value);
                }}
                ref={(inputElement) => {
                  this.newPlaylistName = inputElement;
                }}/>
            <button type="submit" 
            className="btn btn-success" 
            onClick={()=>{ 
              console.log("our new playlist from before: ", this.props.typedInputValue)
              this.props.handleSubmit(this.props.typedInputValue);
            }}> 
          Create Playlist </button>
        <div className="list-group">
          
        </div>
      </div>
    );
  }
}

/*
Things to do: 
1. Create that Mini-Container
2. In the Mini-Container do all the state stuff: 
  -Hold Local State
  -Async Function on Props???
  -Validations and Clearing Input?


  Our Old Code: 
     

*/


