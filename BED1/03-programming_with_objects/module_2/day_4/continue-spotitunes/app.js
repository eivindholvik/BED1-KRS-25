import User from "./classes/user.js";
import Playlist from "./classes/playlist.js";
import Song from "./classes/song.js";

import { getSongById, getUserById, getPlaylistsByUserId } from './libraries/mockAPI.js';

const userId = 1;
const userData = getUserById(userId);

if (!userData) {
  console.log(`User with ID ${userId} not found!`);
} else {
  const user = new User({ ...userData });

  const playlistsData = getPlaylistsByUserId(userId);
  if (!playlistsData || playlistsData.length === 0) {
    console.log(`${user.userName} has no playlists.`);
  } else {
    playlistsData.forEach(playlistData => {
      if (playlistData) {
        const songsData = playlistData.songIds.map(songId => getSongById(songId));

        const songs = songsData.map(songData => new Song({ ...songData }));

        //{ createdBy, name, createdAt = new Date(), songs = [] }


        const playlist = new Playlist({ createdBy: user, name: playlistData.playListName, createdAt: playlistData.createdAt, songs: songs });

        // user.createPlaylist({ name: playlistData.playListName, createdAt: playlistData.createdAt, songs: songs})

        user.addPlaylist(playlist);

      }
    })
  }

  console.log(user);

}