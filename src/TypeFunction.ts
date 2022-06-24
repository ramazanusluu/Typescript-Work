// function Deneme(): [number, string] {
//   return [25, "ramazan"];
// }
// const qwe = Deneme();

// function LogPerson(name: string, surname: string, age: number) {
//   console.log({ name, surname, age });
// }
// LogPerson("Asya", "Avci", 20);

// function Persons(parametreler: {
//   name: string;
//   surname: string;
//   age: number;
// }): Promise<number> {
//   return new Promise((resolve, reject) => {
//     resolve(25);
//   });
// }
// Persons({
//   name: "Ramazan",
//   surname: "Uslu",
//   age: 22,
// });

function yaz(name: string, count: number): void {
  for (let i = 0; i < count; i++) {
    console.log(name);
  }
}
yaz("Ramazan", 5)