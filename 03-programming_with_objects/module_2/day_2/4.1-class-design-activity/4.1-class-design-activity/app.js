// CREATE THE CLASSES HERE
// =================================

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
    const sec = this.#duration % 60;
    const min = Math.floor(this.#duration / 60);
    const out = `${this.#title} by ${this.#artist}\nAlbum: ${this.#album}\nGenre: ${this.#genre}\nDuration: ${min}:${sec}`;
    console.log(out);
    return out;
  }

  get title() {
    return this.#title;
  }

  // getTitle() {
  //   return this.#title;
  // }
}

// const song1 = new Song("Billie Jean", 294, "Michael Jackson", "Thriller", "Pop");

// song1.getSongDetails();


// PLAYLIST

class Playlist {
  #createdBy;
  #name;
  #songs = [];
  #createdAt;
  constructor(createdBy, name, createdAt = new Date()) {
    this.#createdBy = createdBy;
    this.#name = name;
    this.#createdAt = createdAt;
  }

  addSong(song) {
    const i = this.#songs.indexOf(song);
    if (i === -1) {
      this.#songs.push(song);
    } else {
      console.log(`The track ${song.title} is alredy in the playlist ${this.#name}`);
    }
  }

  removeSong(song) {
    const i = this.#songs.indexOf(song);
    if (i === -1) {
      console.log(`The track ${song.title} is not in the playlist ${this.#name}`);
    }
    this.#songs.splice(i, 1);
  }

  getSongs() {
    this.#songs.forEach((song, i) => {
      if (i !== 0) {
        console.log("--------------");
      }
      song.getSongDetails();
    });
    return [...this.#songs];
  }
  get name() {
    return this.#name;
  }
}

// USER
class User {
  #userName;
  #createdAt;
  #playlists = [];
  constructor(userName) {
    this.#userName = userName;
  }
  createPlaylist(playlistName) {
    const newPlaylist = new Playlist(this, playlistName);
    this.#playlists.push(newPlaylist);
    return newPlaylist;
  }

  removePlaylist(playlist) {
    const i = this.#playlists.indexOf(playlist);
    if (i === -1) {
      console.log(`The playlist ${playlist.name} is not found!`);
    }
    this.#playlists.splice(i, 1);
  }

  getPlaylists() {
    return [...this.#playlists];
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
const user = new User("MrWorldWide"); // Passing new Date and [] is a bit awkward, we will learn ways to make this simpler.
const playlist = user.createPlaylist("Vibes");

playlist.addSong(song1);
playlist.addSong(song2);
playlist.addSong(song3);
playlist.addSong(song4);
playlist.addSong(song1); // Testing duplicate, should log: 'Song: Billie Jean, already exists in this playlist.'

console.log("Songs in playlist:");
user.getPlaylists()[0].getSongs();
playlist.getSongs();
