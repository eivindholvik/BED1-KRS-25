import fetchData from "./fetchData.js";
export default async function fetchAndProcessAllData() {
    try {
        const posts = await fetchData("http://jip.restapi.co.za/posts");
        const comments = await fetchData("http://jip.restapi.co.za/comments");
        const users = (await fetchData("http://sjip.restapi.co.za/users"));
        console.log(posts, comments, users);
    }
    catch (err) {
        console.error("Error fetching data:", err);
        throw err;
    }
}
//# sourceMappingURL=fetch-and-process-all-data.js.map