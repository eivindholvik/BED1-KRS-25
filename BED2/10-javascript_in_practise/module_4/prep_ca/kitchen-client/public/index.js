const kitchen = new WebSocket("ws://localhost:4000?role=kitchen");

const completeOrderBtn = document.querySelector("#completeOrderBtn");
const refreshListBtn = document.querySelector("#refreshListBtn");
const nextOrderNum = document.querySelector("#nextOrderNum");
const orderQueue = document.querySelector("#orderQueue");

kitchen.addEventListener("message", (ev) => {
    if (kitchen !== WebSocket.OPEN) {
        console.log(WebSocket.OPEN);
    }

    const data = JSON.parse(ev.data);
    if (data.type === "orders_update") {
        nextOrderNum.textContent = data.ordersQueue[0];
        const queueUL = document.createElement("ul");
        for (let i = 0; i < data.ordersQueue.length; i++) {
            const queueItem = document.createElement("li");
            queueItem.textContent = data.ordersQueue[i];
            queueUL.append(queueItem);
        }
        orderQueue.innerHTML = "";
        orderQueue.append(queueUL);
    }
});

completeOrderBtn.addEventListener("click", () => {
    if (kitchen.readyState !== WebSocket.OPEN) return;

    kitchen.send(
        JSON.stringify({
            type: "order_completed",
        }),
    );
});
