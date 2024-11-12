
export interface Product{
  name: string;
  category: string;
  price: number;
}

// Product interface
const products: Product[] = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 30 },
  { name: "Phone", category: "Electronics", price: 800 },
  { name: "Pants", category: "Clothing", price: 50 },
  { name: "Blender", category: "Kitchen", price: 100 }
];

// Function to group products by category
function groupByCategory( products : Product[] ) : { [key:string] : Product[]} {
  return products.reduce((acc: { [key: string]: Product[] }, product: Product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});
}

console.log(groupByCategory(products));
