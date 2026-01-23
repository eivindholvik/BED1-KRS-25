const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
    const updateInterval = setInterval(() => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ value: Math.random() }));
        }
    }, 1000);

    ws.on("close", () => {
        clearInterval(updateInterval);
    });
});

console.log("WebSocket server started on port 8080");
