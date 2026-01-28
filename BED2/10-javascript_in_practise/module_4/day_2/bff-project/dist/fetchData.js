// Import the HTTP module from Node.js to enable HTTP communications.
import http from "http";
// Define a function 'fetchData' that takes a URL and returns a promise.
export default function fetchData(url) {
    // The promise will either resolve (on successful data retrieval) or reject (on error).
    return new Promise((resolve, reject) => {
        // Use the 'http' module to send a GET request to the specified URL.
        http.get(url, (res) => {
            // Initialize an empty string to accumulate the data chunks.
            let data = "";
            // Listen for 'data' events (chunks of data being received).
            res.on("data", (chunk) => {
                console.log(chunk);
                // Append each chunk of data to the 'data' string.
                data += chunk;
            });
            // Listen for the 'end' event which signifies the end of data transmission.
            res.on("end", () => {
                // When all data is received, parse it as JSON and resolve the promise with this data.
                resolve(JSON.parse(data));
            });
        }).on("error", (err) => {
            // Listen for any 'error' event during the HTTP request.
            // If an error occurs, reject the promise with the error object.
            reject(err);
        });
    });
}
// Export the 'fetchData' function to make it available for import in other modules.
//# sourceMappingURL=fetchData.js.map