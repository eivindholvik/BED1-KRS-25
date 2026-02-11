const customer = new WebSocket("ws://localhost:4000?role=customer");

const placeOrderBtn = document.querySelector("#placeOrderBtn");
const orderNumPara = document.querySelector("#orderNumPara");

placeOrderBtn.addEventListener("click", () => {
    if (customer.readyState !== WebSocket.OPEN) return;

    customer.addEventListener("message", (ev) => {
        console.log(JSON.parse(ev.data).orderNumber);
        orderNumPara.textContent = JSON.parse(ev.data).orderNumber;
    });

    customer.send(
        JSON.stringify({
            type: "order_placed",
        }),
    );

    placeOrderBtn.style.display = "none";
});
