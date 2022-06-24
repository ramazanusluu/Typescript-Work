interface person {
  personName: string;
  personSurname: string;
  age: number;
}

//interface içinde bulunan bir veriyi çıkartmak - omit
const People: Omit<person, "age"> = {
  personName: "Ramazan",
  personSurname: "uslu",
};

//-------------------------------------------------------------------

//Fonksiyonun ilk parametresinin tipini almak -Parameters
function Print(value: { title: string; description: string }) {}

type valueType = Parameters<typeof Print>["0"];

const _valuetype: valueType = {
  title: "Test",
  description: "Deneme",
};

//-------------------------------------------------------------------

//Partial -  nitelikleri opsiyonel yapmak
interface Vehicle {
  title: string;
  description: string;
}

const car: Partial<Vehicle> = {};

//Required - nitelikleri zorunlu hale getirmek
interface Car {
  brand?: string;
  model?: string;
}

const taxi: Required<Car> = {
  brand: "Renauld",
  model: "clio",
};

//Readonly - Sadece okur değişim işlemi yapılmaz
interface Music {
  MusicName: string;
  Song: string;
}

const _music: Readonly<Music> = {
  MusicName: "ASDF",
  Song: "asdasd",
};

//Pick -sadece belirlediğimiz bir veri tipi çeker

interface school {
  schollName: string;
  adress: string;
}

const _school: Pick<school, "adress"> = {
  adress: "Malatya",
};

//Exculude string, number, boolean, arasından number olanları yoksay
type Device = Exclude<string | number | boolean | (() => void), number>;

const _device: Device = () => {};

//--------------------------------------------------------------
function GeriyeSayiDondur() {
  return 25;
}

const _geriyesayidondur: ReturnType<typeof GeriyeSayiDondur> = 2;
