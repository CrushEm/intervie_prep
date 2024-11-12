export interface User {
    firstName: string;
    lastName: string;
    age: number;
  }

// Function that filters users by age and formats their names
function getUserNames(users: User[], minAge: number) : string[] {
  return users
    .filter(user => user.age >= minAge)
    .map(user => `${user.firstName} ${user.lastName}`);
}

// Sample data
const users: User[] = [
  { firstName: "Alice", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Johnson", age: 20 },
  { firstName: "Charlie", lastName: "Brown", age: 35 },
];

console.log(getUserNames(users, 21));
