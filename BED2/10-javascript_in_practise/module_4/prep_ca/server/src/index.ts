import { WebSocketServer, WebSocket } from "ws";
import type { IncomingMessage } from "node:http";
import { createPublicKey } from "node:crypto";

const wss: WebSocketServer = new WebSocketServer({ port: 4000 });

const ordersQueue: Array<number> = [];
let nextOrderNumber: number = 100;
let kitchen: WebSocket | undefined = undefined;

type OrderPlacedResponse = {
    type: string;
    orderNumber: number;
};

type OrdersUpdateResponse = {
    type: string;
    ordersQueue: number[];
};

wss.on("connection", (ws: WebSocket, req: IncomingMessage): void => {
    if (req.url === undefined) return;

    let url = new URL(req.url, "http://localhost");
    let role = url.searchParams.get("role");

    if (role === "kitchen") {
        kitchen = ws;
    }
    // else if (role !== "customer") {
    //     return;
    // }

    console.log(`New ${role} connected, there are ${wss.clients.size} total`);

    ws.on("message", (data) => {
        const parsedData = JSON.parse(data.toString());

        switch (parsedData.type) {
            case "order_placed":
                ordersQueue.push(nextOrderNumber);

                const response: OrderPlacedResponse = {
                    type: "order_placed_response",
                    orderNumber: nextOrderNumber,
                };

                nextOrderNumber++;

                ws.send(JSON.stringify(response));

                if (kitchen !== undefined) {
                    const response: OrdersUpdateResponse = {
                        type: "orders_update",
                        ordersQueue,
                    };
                    kitchen.send(JSON.stringify(response));
                }
                break;
            case "order_completed":
                ordersQueue.shift();

                if (kitchen !== undefined) {
                    const response: OrdersUpdateResponse = {
                        type: "orders_update",
                        ordersQueue,
                    };
                    kitchen.send(JSON.stringify(response));
                }

                //contact the customer clinet who owns this order
                break;
        }
    });
});
