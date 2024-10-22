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

  constructor(createdBy, name) {
    this.#id = ++this.constructor.count;
    this.#name = name;
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
  constructor(userName) {
    this.#userName = userName;
    this.#createdAt = new Date();
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

}

// SONG
class Song {
  #title;
  #duration;
  #artist;
  #album;
  #genre;

  constructor(title, duration, artist, album, genre) {
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


// ================================

// Provided demo data ( remove /* and */ to test your classes)
// ================================


// Example Songs
const song1 = new Song("Billie Jean", 294, "Michael Jackson", "Thriller", "Pop");
const song2 = new Song("Bohemian Rhapsody", 354, "Queen", "A Night at the Opera", "Rock");
const song3 = new Song("Lose Yourself", 326, "Eminem", "8 Mile", "Rap");
const song4 = new Song("Shape of You", 263, "Ed Sheeran", "Divide", "Pop");
const song5 = new Song("Hotel California", 391, "Eagles", "Hotel California", "Rock");
const song6 = new Song("Blinding Lights", 200, "The Weeknd", "After Hours", "Synthwave");
const song7 = new Song("Humble", 177, "Kendrick Lamar", "DAMN.", "Rap");
const song8 = new Song("Uptown Funk", 269, "Mark Ronson ft. Bruno Mars", "Uptown Special", "Funk");
const song9 = new Song("Stairway to Heaven", 482, "Led Zeppelin", "Led Zeppelin IV", "Rock");
const song10 = new Song("Shallow", 216, "Lady Gaga & Bradley Cooper", "A Star is Born", "Pop");
const song11 = new Song("Smells Like Teen Spirit", 301, "Nirvana", "Nevermind", "Grunge");
const song12 = new Song("Rolling in the Deep", 228, "Adele", "21", "Pop");

// Usage example
const user = new User("MrWorldWide", new Date(), []); // Passing new Date and [] is a bit awkward, we will learn ways to make this simpler.

// user.userName = "Hei";
// console.log(user.userName);
// console.log(user);
const playlist = user.createPlaylist("Vibes");

playlist.addSong(song1);
playlist.addSong(song2);
playlist.addSong(song3);
playlist.addSong(song4);
playlist.addSong(song1); // Testing duplicate, should log: 'Song: Billie Jean, already exists in this playlist.

// console.log("Songs in playlist:");
// // playlist.getSongs().forEach(song => console.log(song.getSongDetails()));
// user.removePlaylist(playlist);
// console.log(user.getPlaylists());

// console.log(user.getPlaylistOfId(1));
