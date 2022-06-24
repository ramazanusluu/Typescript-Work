interface IVehicle {
  Brand: string;
  Speed: number;
  FuelTank: number;
  GetFuelPriceTotal(way: number, unitPrice: number): number;
}

class Taxi implements IVehicle {
  Brand: string;
  Speed: number;
  FuelTank: number;
  GetFuelPriceTotal(way: number, unitPrice: number): number {
    return way * unitPrice;
  }
}

class Truck implements IVehicle {
  Brand: string;
  Speed: number;
  FuelTank: number;
  GetFuelPriceTotal(way: number, unitPrice: number): number {
    return way * unitPrice;
  }
}

let _taxi = new Taxi();
let _truck = new Truck();

_taxi.Brand = "Renault";
_taxi.FuelTank = 40;
_taxi.Speed = 120;
let taxiMessage: string = "Taxi total : " + _taxi.GetFuelPriceTotal(100, 3.6).toString();

_truck.Brand = "Ford";
_truck.FuelTank = 80;
_truck.Speed = 160;
let truckMessage: string = "Truck total : " + _truck.GetFuelPriceTotal(100, 12.4);

console.log(taxiMessage);
console.log(truckMessage);
