export default class User {
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
    console.log(`${this.#userName}: ${this.#createdAt}`);
  }
  get userName() {
    return this.#userName;
  }

}
