export interface Order {
  product: string,
  type: string,
  price: number, 
  quantity: number,
}

// Array of orders
const orders: Order[] = [
  { product: "Laptop", type: "Electronics", price: 1200, quantity: 2 },
  { product: "Phone", type: "Electronics", price: 800, quantity: 5 },
  { product: "Shirt", type: "Clothing", price: 20, quantity: 10 },
  { product: "Pants", type: "Clothing", price: 50, quantity: 3 },
  { product: "Blender", type: "Kitchen", price: 100, quantity: 4 }
];

// Function to calculate total revenue per product type
function calculateRevenueByType( orders: Order[]) : {[key: string] : number  } {

    // returns  {Electronics : number }
  return orders.reduce((acc: { [key: string]: number } , order: Order) => {
    if (!acc[order.type]) {
      acc[order.type] = 0;
    }
    acc[order.type] += order.price * order.quantity;
    return acc;
  }, {});

}

console.log(calculateRevenueByType(orders));
