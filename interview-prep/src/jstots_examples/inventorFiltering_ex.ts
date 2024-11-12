export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    inStock: boolean;
}

const inventory: Product[] = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: false },
    { id: 3, name: "Coffee Maker", category: "Home Appliances", price: 80, inStock: true },
    { id: 4, name: "Blender", category: "Home Appliances", price: 50, inStock: true },
    { id: 5, name: "TV", category: "Electronics", price: 600, inStock: true }
];

function filterItems<T>(items: T[], predicate: (item: T) => boolean): T[] {
    return items.filter(predicate);
}

const inStockProducts = filterItems(inventory, (product) => product.inStock);
console.log(inStockProducts);
/*
Expected output:
[
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 3, name: "Coffee Maker", category: "Home Appliances", price: 80, inStock: true },
    { id: 4, name: "Blender", category: "Home Appliances", price: 50, inStock: true },
    { id: 5, name: "TV", category: "Electronics", price: 600, inStock: true }
]
*/

const affordableProducts = filterItems(inventory, (product) => product.price < 100);
console.log(affordableProducts);
/*
Expected output:
[
    { id: 3, name: "Coffee Maker", category: "Home Appliances", price: 80, inStock: true },
    { id: 4, name: "Blender", category: "Home Appliances", price: 50, inStock: true }
]
*/

const electronics = filterItems(inventory, (product) => product.category === "Electronics");
console.log(electronics);
/*
Expected output:
[
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: false },
    { id: 5, name: "TV", category: "Electronics", price: 600, inStock: true }
]
*/