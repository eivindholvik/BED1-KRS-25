// /*
//     What is destructuring:
//     - Destructuring is a syntax in JavaScript that allows you to extract values from arrays
//       or properties from objects and assign them to variables directly.
//     - This approach simplifies the process of extracting multiple values from arrays or objects,
//       making the code cleaner and more intuitive.
//     - The core ethos: Destructuring helps us write concise code by allowing us to unpack arrays
//       and objects efficiently.
// */

// /*
//     Destructuring Arrays:
//     - Arrays store multiple values in a specific order.
//     - With destructuring, we can pull out specific elements from an array into individual variables.
//     - This is particularly useful when dealing with things like playlists or track lists.
// */

// // Example: Destructuring an array of top songs in a playlist
// let topSongs = ['Blinding Lights', 'Watermelon Sugar', 'Levitating', 'Peaches', 'Good 4 U'];

// // Destructuring the top 3 songs from the playlist
// let [firstSong, secondSong, thirdSong, ...restOfSongs] = topSongs;

// // let fSong = topSongs[0];
// // let sSong = topSongs[1];

// /*
//     Explanation:
//     - The array `topSongs` contains 5 song titles.
//     - By using destructuring, we assigned:
//         - 'Blinding Lights' to `firstSong`,
//         - 'Watermelon Sugar' to `secondSong`,
//         - 'Levitating' to `thirdSong`.
//     - We can leave out the remaining songs, focusing only on the first three.
//     - This is cleaner and more readable than manually accessing array elements with indexes.
// */

// console.log(firstSong);  // Logs: 'Blinding Lights'
// console.log(secondSong); // Logs: 'Watermelon Sugar'
// console.log(thirdSong);  // Logs: 'Levitating'
// console.log(restOfSongs);

// /*
//     Destructuring with Default Values in Arrays:
//     - Sometimes a playlist might not have enough songs.
//     - Destructuring allows you to set default values for variables in case the array doesn’t have enough elements.
// */

// let favoriteTracks = ['Savage Love'];

// // Destructuring with default values for second and third tracks
// let [trackOne, trackTwo = 'No Song Available', trackThree = 'No Song Available'] = favoriteTracks;

// /*
//     Explanation:
//     - The array `favoriteTracks` only contains one track.
//     - Using default values, we handle the missing tracks by assigning 'No Song Available'
//       to `trackTwo` and `trackThree` when they are not provided.
// */

// console.log(trackOne);  // Logs: 'Savage Love'
// console.log(trackTwo);  // Logs: 'No Song Available'
// console.log(trackThree); // Logs: 'No Song Available'


// /*
//     Destructuring Objects:
//     - Destructuring also works for objects, allowing you to extract properties into variables.
//     - This is helpful when working with user profiles, playlists, or song metadata.
// */

// // Example: Destructuring a user's profile
// let userProfile = { name: 'DJ Khaled', subscription: 'Premium', playlistsCreated: 25 };

// // Destructuring the object into individual variables
// let { name, subscription, playlistsCreated } = userProfile;

// /*
//     Explanation:
//     - The `userProfile` object has three properties: `name`, `subscription`, and `playlistsCreated`.
//     - Destructuring allows us to directly extract these values into separate variables in one step.
// */

// console.log(name);             // Logs: 'DJ Khaled'
// console.log(subscription);     // Logs: 'Premium'
// console.log(playlistsCreated); // Logs: 25


/*
    Destructuring with Default Values in Objects:
    - Just like arrays, you can assign default values when destructuring objects in case a property is missing.
*/

// Example: Destructuring a song with default values for missing properties
let song = { name: 'Stay', artist: 'The Kid LAROI' };

// Destructuring the song object with default values
let { name: songName, artist, duration = '3:00' } = song;

/*
    Explanation:
    - The `song` object only contains `title` and `artist` properties.
    - We provide a default value of '3:00' for `duration` since it's missing from the object.
    - This ensures that even if the `duration` is not specified, it gets a sensible default value.
*/

console.log(truls);    // Logs: 'Stay'
console.log(artist);   // Logs: 'The Kid LAROI'
console.log(duration); // Logs: '3:00' (default value used)
