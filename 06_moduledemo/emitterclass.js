import EventEmitter from "node:events";

class OrderProcessor extends EventEmitter{
    processOrder(orderId, items){
        console.log("Processing Order: " + orderId);

        this.emit("orderStarted", orderId);

        setTimeout(() =>{
            this.emit("orderCompleted", {
                orderId,
                itemCount: items.length
            });
        }, 2000);
    }

    cancelOrder(orderId){
        console.log("Cancelling order");
        this.emit("orderCancelled", orderId);
    }
}

const op = new OrderProcessor();

op.on("orderStarted", (orderId) => {
    console.log("Processing of order " + orderId + " started");
});

op.on("orderCompleted", (orderData) => {
    console.log("Order: " + orderData.orderId + " completed");
    console.log("Total items served: " + orderData.itemCount);
});

op.on("orderCancelled", (orderId) => {
    console.log("Order: " + orderId + " cancelled");
});

let items = [
    {name:"Laptop", price: 50000},
    {name:"Mouse", price: 600}
];

op.processOrder("ORD-001", items);

setTimeout(() => {
    op.cancelOrder("ORD-002");
}, 3000);



