'use strict';

const ADD_PLAYLIST = 'ADD_PLAYLIST';
const initialPlaylist = {};

const hardCodedData={
	name:"my cool playlist"
}

export const addPlaylist = function (playlist) {
	console.log("this is the playlist that's passed to addPlaylist Reducer: ", playlist);
  const action = {
    type: ADD_PLAYLIST,
    playlist: playlist
  };
  return action;
};

export default function playlistReducer (state = initialPlaylist, action) {
  switch (action.type) {
    case ADD_PLAYLIST: return action.playlist;
    default: return state;
  }
};