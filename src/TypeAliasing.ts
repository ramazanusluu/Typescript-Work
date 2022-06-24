// type Person = {
//   name?: string;
//   surname?: string;
//   age: number;
//   title: string;
// };
// soru işareti olanlar opsiyonel olur yazılmasa olur

// const obj: Person[] = [
//   {
//     age: 22,
//     title: "ASDFG",
//   },
// ];

type Colors = "red" | "green" | "blue";

type CustomColors = "magenta" | "cyan" | "purple";

type AllColors = Colors | CustomColors;

const myColor: Colors = "blue";

const colorArray: (Colors | CustomColors)[] = [
  "blue",
  "green",
  "red",
  "magenta",
];

const renkDizi: AllColors[] = ["blue"];

//-------------------------------------------------------------------------------------

type Person = {
  name: string;
  surname: string;
  age: number;
};
type Animal = {
  age: number;
  cins: string;
  tür: string;
};

type AnimalPerson = Person & Animal;

const PersonAnimal = <AnimalPerson>{};

//-------------------------------------------------------------------------------------

const myMap = new Map<string, Person>();

myMap.set("Ramazan", {
  name: "Ramazan",
  surname: "uslu",
  age: 22,
});
