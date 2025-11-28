type OrderStatus = "pending" | "shipped" | "delivered";

let orderStatus: OrderStatus = "shipped"; 
console.log(`Estado de la orden: ${orderStatus}`);


enum LogLevel { 
    Info = "Info",
    Warning = "Warning",
    Error = "Error"
}

const logMessage = (level: LogLevel, message: string) => {
    console.log(level + message)
}
logMessage(LogLevel.Warning, "Message");