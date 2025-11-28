function updateStock(currentStock: number, quantityChange: number): number { 
    return currentStock + quantityChange;
}

const stockInicial = 50;
const nuevoStock = updateStock(stockInicial, -5);

console.log(`Stock actualizado: ${nuevoStock}`);