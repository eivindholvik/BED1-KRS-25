const songsCollection = [
  { songId: 1, title: 'We Jamming', duration: 200, artist: 'Bob Marley', album: 'Legend', genre: 'Reggae' },
  { songId: 2, title: 'No Woman No Cry', duration: 260, artist: 'Bob Marley', album: 'Live!', genre: 'Reggae' },
  { songId: 3, title: 'Lofi Chill', duration: 180, artist: 'Lofi Beats', album: 'Chill Vibes', genre: 'Lofi' },
  { songId: 4, title: 'Shape of You', duration: 233, artist: 'Ed Sheeran', album: 'Divide', genre: 'Pop' },
  { songId: 5, title: 'Blinding Lights', duration: 200, artist: 'The Weeknd', album: 'After Hours', genre: 'Pop' },
  { songId: 6, title: 'Stairway to Heaven', duration: 480, artist: 'Led Zeppelin', album: 'IV', genre: 'Rock' },
  { songId: 7, title: 'Bohemian Rhapsody', duration: 355, artist: 'Queen', album: 'A Night at the Opera', genre: 'Rock' },
  { songId: 8, title: 'Hotel California', duration: 391, artist: 'Eagles', album: 'Hotel California', genre: 'Rock' },
  { songId: 9, title: 'Lose Yourself', duration: 326, artist: 'Eminem', album: '8 Mile', genre: 'Hip-Hop' },
  { songId: 10, title: 'Nuthin\' but a "G" Thang', duration: 242, artist: 'Dr. Dre', album: 'The Chronic', genre: 'Hip-Hop' }
];

// Playlists with song IDs (referencing the above songs)
const playlistsCollection = [
  { playlistId: 1, createdBy: 1, playListName: 'Big Jam', createdAt: new Date('2021-03-10'), songIds: [1, 2] },
  { playlistId: 2, createdBy: 2, playListName: 'Chill Beats', createdAt: new Date('2021-04-12'), songIds: [3] }
];

// Users with playlist IDs
const usersCollection = [
  { userId: 1, userName: 'Tom', createdAt: new Date('2020-01-01'), playlistIds: [1] },
  { userId: 2, userName: 'Jerry', createdAt: new Date('2021-05-15'), playlistIds: [2] }
];

// Function to get all songs
export function getAllSongs() {
  return songsCollection;
}

// Function to get a specific song by songId
export function getSongById(songId) {
  return songsCollection.find(song => song.songId === songId) || null;
}

// Function to get all users
export function getAllUsers() {
  return usersCollection;
}

// Function to get a specific user by userId
export function getUserById(userId) {
  return usersCollection.find(user => user.userId === userId) || null;
}

// Function to get a specific user's playlists by userId
export function getPlaylistsByUserId(userId) {
  const user = getUserById(userId);
  if (!user) return null; // Return null if the user does not exist

  // Retrieve the playlists that match the user's playlistIds
  return user.playlistIds.map(playlistId => {
    return playlistsCollection.find(playlist => playlist.playlistId === playlistId) || null;
  });
}