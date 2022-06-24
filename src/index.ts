// Temel Tipler ve Tip Tanımlama

let a: string = "ramazan";

let b: number = 25;

let c: boolean = true;

let d: undefined = undefined;

let e: symbol = Symbol();

const Person: {
  name: string;
  surname: "avci" | "uslu";
  age: number;
} = {
  name: "asya",
  surname: "avci",
  age: 1,
};

const identity = {
  name: "asya" as "hira" | "mirac",
  surname: "avci",
  age: 1,
};

const dizi: string[] = [];

const dizi2 = [] as string[];

const dizi3: string[] | number[] | boolean[] = [];

const dizi4: (string | number)[] = [];

const dizi5 = [] as Array<string | number>;

const myDizi: [string, string, number] = ["ramazan", "uslu", 22];
