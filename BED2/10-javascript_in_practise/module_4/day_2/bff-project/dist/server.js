import express, {} from "express";
import fetchAndProcessAllData from "./fetch-and-process-all-data.js";
// interface User {
//     id: number;
//     name: string;
//     username: string;
//     email: string;
//     address: {
//         street: string;
//         suite: string;
//         city: string;
//         zipcode: number;
//         geo: {
//             lat: number;
//             lng: number;
//         };
//     };
//     phone: string;
//     website: string;
//     company: {
//         name: string;
//         catchPhrase: string;
//         bs: string;
//     };
// }
// /**@type {import("express").Express} */
const app = express();
const port = 3000;
app.get("/", (req, res, next) => {
    try {
        fetchAndProcessAllData();
    }
    catch (e) {
        next(e);
    }
    // const users = await fetchUsers();
    // console.log(users);
    res.send("Welcome to our BFF for the front-end!!");
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});
// async function fetchUsers(): Promise<Array<User> | string> {
//     try {
//         const response = await fetch("http://jip.restapi.co.za/users");
//         return await response.json();
//     } catch (e) {
//         return "Something went wrong";
//     }
// }
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map