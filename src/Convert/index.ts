//string'ten number a çevirme
let num1: string = "295";
let num2: string = "439";

let number;

number = parseInt(num1) + parseInt(num2);

console.log(number);

//number dan string'e çevirme
let num3: number = 15;

let title = num3.toString();

console.log(title);

//Yukarıdakilerden farklı olarak convert işlemi

let num4: any = 45;
let message = <string>num4;

console.log(message);

let num5: any = 50;
let message2 = num5 as string;

console.log(message2);

