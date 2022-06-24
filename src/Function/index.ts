function GetNumberAddition(val: number, val1: number) {
  return val + val1;
}
console.log(GetNumberAddition(4, 5));

//fonksiyon dönüş tipini belirleme
function Collection(val2: number, val3: number): string {
  return (val2 + val3).toString();
}
console.log(Collection(1, 6));

//2 parametreden bir tanesinin gelememe durumu
function Collections(val4: number, val5?: number): string {
  if (val5 !== undefined) {
    return (val4 + val5).toString();
  } else {
    return val4.toString();
  }
}
console.log(Collections(1));

//Fonksiyona gönderilecek parametrelerin sayısının belli olmadığı durum ;
function forever(...numbers: number[]): string {
  let result: number = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return "result: " + result;
}
console.log(forever(12, 45, 78, 45, 2));
