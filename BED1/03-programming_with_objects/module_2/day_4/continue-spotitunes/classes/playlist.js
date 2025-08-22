export default class Playlist {
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
    this.#createdAt = createdAt;
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