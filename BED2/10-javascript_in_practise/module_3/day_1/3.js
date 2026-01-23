// // const fetch = require("node-fetch");

// async function fetchUserData(userId) {
//     const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${userId}`,
//     );
//     const userData = await response.json();
//     return userData;
// }

// const userIds = [1, 2, 3];
// // Promise.all(userIds.map(fetchUserData))
// //     .then((users) => console.log(users))
// //     .catch((error) => console.error(error));

// const processUserData = curry((processFn, data) => processFn(data));

// function aggregateData(data) {
//     // Aggregation logic here
// }

// const users = fetchUsers(); // Assume this fetches user data
// const processedUsers = processUserData(aggregateData, users);

const initialArray = Object.freeze([1, 2, 3]);

function addElement(arr, element) {
    return [...arr, element]; // Creates a new array, ensuring immutability
}

const newArray = addElement(initialArray, 4);
initialArray.push(5);
console.log(initialArray);
console.log(newArray);
