export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  available: boolean;
}

const categories: string[] = ["fiction", "nonfiction", "science", "history"];

const libraryBooks: Book[] = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    available: true,
  },
  {
    id: 2,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Science",
    available: false,
  },
  {
    id: 3,
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    category: "Science",
    available: true,
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    available: true,
  },
  {
    id: 5,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "History",
    available: false,
  },
];


function filterItems<T>(items: T[], predict: (item: T) => boolean): T[] {
  return items.filter(predict);
}

//filter available books
const avilableBooks = filterItems(libraryBooks,  (Book)=> Book.available  );
console.log(avilableBooks);

//filter books by category

const nonFiction = filterItems(libraryBooks,  (item:Book)=>  item.category === "History"   );
console.log(nonFiction);

//filter books by author
const george = filterItems(libraryBooks,  (item:Book)=>  item.author === "George Orwell"   );
console.log(george);