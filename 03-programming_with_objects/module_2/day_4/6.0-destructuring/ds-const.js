/*
    User constructor has multiple optional parameters:
    - A constructor is a special method for creating and initializing an object instance.
    - In this case, the User constructor takes in three parameters:
        1. userName: The name of the user (required).
        2. playlists: An optional array of playlists (defaulting to an empty array).
        3. createdAt: An optional creation date (defaulting to the current date/time).
    - Optional parameters are useful when creating a new user, where they might not have any existing playlists 
      or need a specific createdAt date set manually.
*/

class User {
    constructor(userName, playlists = [], createdAt = new Date()) {
        this.userName = userName;
        this.playlists = playlists;
        this.createdAt = createdAt;
    }
}

/*
    Example 1: Creating an existing user with data from an API:
    - Even though the User constructor uses the 'new' keyword, this doesn’t always mean 
      the user is 'new' in the system. The data may come from a database or an API.
    - Here, we create an existing user (Tom) with some pre-fetched playlist data and a specific creation date.
*/

const tomsPlaylists = [{ name: 'Big Jam', songs: [{ title: 'We Jamming' }] }]; // Fetched from API
let existingUser = new User('Tom', tomsPlaylists, new Date('2024-07-24T09:36:00'));

// Log the properties individually to make it easier to read
console.log('Existing User Name:', existingUser.userName);
console.log('Existing User Playlists:', existingUser.playlists);
console.log('Existing User Created At:', existingUser.createdAt);

/*
    Example 2: Creating a new user:
    - For new users like 'Fresh Fred', we don’t provide playlists or a creation date, so the defaults apply.
    - This works fine because the default playlists = [] and createdAt = new Date() handle missing arguments.
*/

let newUser = new User('Fresh Fred');

// Log the properties individually
console.log('New User Name:', newUser.userName);
console.log('New User Playlists:', newUser.playlists);
console.log('New User Created At:', newUser.createdAt);

/*
    The Problem:
    - The issue arises when we want to create a user who doesn't have playlists but does have a specific createdAt date.
    - In this case, using the optional constructor parameters creates confusion because the argument order matters.
    - JavaScript doesn’t have a strict type system, so it tries to interpret arguments as best as it can, 
      which can result in variable assignments getting mixed up.
*/

let existingUserNoPlaylist = new User('Squidward', new Date('2023-02-03T09:30:00'));

// Log the properties individually to show the issue
console.log('Existing User (No Playlist) Name:', existingUserNoPlaylist.userName);
console.log('Existing User (No Playlist) Playlists:', existingUserNoPlaylist.playlists);
console.log('Existing User (No Playlist) Created At:', existingUserNoPlaylist.createdAt);

/*
    Why This is a Problem:
    - Because the parameters rely on their order, passing a value for createdAt without passing playlists 
      causes a mismatch. This results in createdAt being misassigned.
    - Although we could pass an empty array for playlists to fix this, the point is to illustrate how relying 
      on parameter order for optional values can lead to bugs.
*/

/*
    Solution: Using Destructuring in Function Parameters:
    - Destructuring solves this issue by allowing us to pass arguments as named properties within an object.
    - The order no longer matters, and we can provide only the properties we need, relying on default values for the rest.
    - This approach also makes the code more readable, as it’s clear which values are being assigned to which variables.
    - It's important to note that destructuring like this isn't limited to class constructors—any function can use this pattern.
*/

class UserReduex {
    constructor({ userName, playlists = [], createdAt = new Date() }) {
        this.userName = userName;
        this.playlists = playlists;
        this.createdAt = createdAt;
    }
}

/*
    Fixing the previous issue using destructuring:
    - We now pass an object with named properties to the UserReduex constructor.
    - This removes ambiguity: we explicitly assign userName and createdAt while skipping the playlists, 
      which correctly defaults to an empty array.
*/

let buggyUser = new UserReduex({ userName: 'Squidward', createdAt: new Date('2023-02-03T09:30:00') });

// Log the properties individually to show the correct behavior
console.log('Buggy User (Fixed) Name:', buggyUser.userName);
console.log('Buggy User (Fixed) Playlists:', buggyUser.playlists);
console.log('Buggy User (Fixed) Created At:', buggyUser.createdAt);

/*
    Summary:
    - By using destructuring in the constructor, we avoid the issues caused by parameter order.
    - Destructuring allows us to selectively provide arguments, making the code more flexible and bug-resistant.
    - This pattern can be applied to any function where you want to handle multiple optional parameters 
      or where parameter names are more meaningful than their order.
*/
