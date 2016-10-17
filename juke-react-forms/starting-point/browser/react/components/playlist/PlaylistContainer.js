'use strict';

import { connect } from 'react-redux';
import Playlist from './Playlist';
import {addPlaylist} from '../../ducks/playlist'

const mapStateToProps= (state)=>{
	console.log("the current state: ", state);
	return {};
}
 
const mapDispatchToProps= (dispatch)=> ({
	handleSubmit: function(playlist){
		dispatch(addPlaylist(playlist));
	}
})

const statefulComponentCreator = connect(mapStateToProps, mapDispatchToProps);
const PlaylistContainer = statefulComponentCreator(Playlist);
export default PlaylistContainer;


/*
<Provider store={store}
	<PlaylistContainer props=mapStateToProps, mapDispatchToProps>
		</Playlist>
	<PlaylistContainer/>
	<ArtistContainer props=mapStateToProps, mapDispatchToProps>
		</Artist>
	<ArtistContainer/>
</Provider>
*/