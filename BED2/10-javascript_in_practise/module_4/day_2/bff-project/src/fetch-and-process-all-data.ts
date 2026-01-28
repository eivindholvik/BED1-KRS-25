import fetchData from "./fetchData.js";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: number;
        geo: {
            lat: number;
            lng: number;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export default async function fetchAndProcessAllData(): Promise<void> {
    try {
        const posts = await fetchData("http://jip.restapi.co.za/posts");
        const comments = await fetchData("http://jip.restapi.co.za/comments");
        const users = (await fetchData("http://jip.restapi.co.za/users")) as
            | User[]
            | Error;
        console.log(posts, comments, users);
    } catch (err) {
        console.error("Error fetching data:", err);
        throw err;
    }
}
