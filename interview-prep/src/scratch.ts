function greet(name: string): string {
  return "Hello, " + name;
}

function filterArraySimple<T>(data: T[], propValue: T): T[] {
  return data.filter((item) => propValue === item);
}

function filterArrayObjects<T, K extends keyof T>(
  data: T[],
  prop: K,
  propValue: T[K]
): T[] {
  return data.filter((item) => item[prop] === propValue);
}

// example of K in keyof T
type Person = {
  name: string;
  age: number;
};

// Using `K in keyof T` to create a mapped type
type OptionalPerson = {
  [K in keyof Person]?: Person[K];
};
//   {
//     name?: string;
//     age?: number;
//   }


export {}; 
