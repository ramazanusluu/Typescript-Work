type MyObject = {
  objName: string;
  age: string;
  [key: string]: any;
  //Key'i string olan ve verisi any yani herhangi bir şey olan herşeyi girilebilir
};

const myobject: MyObject = {
  objName: "Ramazan",
  age: "22",
  deneme: "sadasdsa",
  title: "asdad",
};
