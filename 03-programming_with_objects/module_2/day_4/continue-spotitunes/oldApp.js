// CREATE THE CLASSES HERE
// =================================


// PLAYLIST
class Playlist {
  #id;
  #createdBy;
  #name;
  #songs = [];
  #createdAt;

  static count = 0;

  constructor({ createdBy, name, createdAt = new Date(), songs = [] }) {
    this.#id = ++this.constructor.count;
    this.#name = name;
    this.#songs = songs;
    this.#createdBy = createdBy;
    this.#createdAt = new Date();
  }

  addSong(song) {
    const index = this.#songs.indexOf(song);
    if (index !== -1) {
      console.log(`Song ${song.getTitle()} already exists in playlist`);
      return;
    }
    this.#songs.push(song);
  }

  getName() {
    return this.#name;
  }

  removeSong(song) {
    const removeIndex = this.#songs.indexOf(song);
    if (removeIndex === -1) return;
    this.#songs.splice(removeIndex, 1);
  }

  getSongs() {
    this.#songs.forEach((song, i) => {
      if (i !== 0) {
        console.log("--------------------");
      }
      console.log(song.getSongDetails());
    });
    return [...this.#songs];
  }

  getId() {
    return this.#id;
  }
}

// USER
class User {
  #userName;
  #createdAt;
  #playlists = [];
  constructor({ userName, playlists = [], createdAt = new Date() }) {
    this.#userName = userName;
    this.#createdAt = createdAt;
    this.#playlists = playlists;
  }

  createPlaylist(playlistName) {
    this.#playlists.forEach((playlist) => {
      if (playlist.getName() === playlistName) {
        console.log(`Playlist name already exists for user: ${playlistName}`);
        return;
      }
    })
    const newPlaylist = new Playlist(this, playlistName)
    console.log(`${this.#userName} created the playlist ${playlistName}`);
    this.#playlists.push(newPlaylist);
    return newPlaylist;
  }

  // get userName() {
  //   return this.#userName;
  // }

  // set userName(newName) {
  //   this.#userName = newName;
  // }

  addPlaylist(playlist) {
    const checkName = playlist.getName();
    this.#playlists.forEach((playlist) => {
      if (playlist.getName() === checkName) {
        console.log(`Playlist name already exists for user: ${checkName}`);
        return;
      }
    })
    console.log(`${this.#userName} created the playlist ${playlist.getName()}`);
    this.#playlists.push(playlist);
  }

  getPlaylistOfId(id) {
    return this.#playlists.find((playlist) => {
      if (playlist.getId() === id) return true;
    })
  }

  //Make names for playlists unique per user for this to work.
  getPlaylistOfName(name) {
    return this.#playlists.find((playlist) => {
      if (playlist.getName() === name) return true;
    })
  }

  removePlaylist(playlist) {
    const removeIndex = this.#playlists.indexOf(playlist);
    if (removeIndex === -1) return;
    this.#playlists.splice(removeIndex, 1);
  }

  getPlaylists() {
    return [...this.#playlists];
  }
  hello() {
    console.log(this.#userName);
  }

}

// SONG
class Song {
  #title;
  #duration;
  #artist;
  #album;
  #genre;

  constructor({ title, duration, artist, album, genre }) {
    this.#title = title;
    this.#duration = duration;
    this.#artist = artist;
    this.#album = album;
    this.#genre = genre;
  }

  getSongDetails() {
    const seconds = this.#duration % 60;
    const minutes = Math.floor(this.#duration / 60);
    return `${this.#title} by ${this.#artist}\nAlbum: ${this.#album}\nGenre: ${this.#genre}\nDuration: ${minutes}:${seconds}`;
  }

  getTitle() {
    return this.#title;
  }
}



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


const song1 = new Song({ ...songsCollection[0] });
const song2 = new Song({ ...songsCollection[1] });

// console.log(song1.getSongDetails());

const newUser = new User({ userName: usersCollection[0].userName, createdAt: new Date('2020-01-01') });

const newPlaylist = new Playlist({ createdBy: newUser, name: playlistsCollection[0].playListName, createdAt: playlistsCollection[0].createdAt, songs: [song1, song2] });

newUser.addPlaylist(newPlaylist);



// newUser.hello();

// console.log(newUser.getPlaylists());

