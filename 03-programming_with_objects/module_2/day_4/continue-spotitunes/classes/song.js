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

export default Song;