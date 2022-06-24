class Taxi {
    GetFuelPriceTotal(way, unitPrice) {
        return way * unitPrice;
    }
}
class Truck {
    GetFuelPriceTotal(way, unitPrice) {
        return way * unitPrice;
    }
}
let _taxi = new Taxi();
let _truck = new Truck();
_taxi.Brand = "Renault";
_taxi.FuelTank = 40;
_taxi.Speed = 120;
let taxiMessage = "Taxi total : " + _taxi.GetFuelPriceTotal(100, 3.6).toString();
_truck.Brand = "Ford";
_truck.FuelTank = 80;
_truck.Speed = 160;
let truckMessage = "Truck total : " + _truck.GetFuelPriceTotal(100, 12.4);
console.log(taxiMessage);
console.log(truckMessage);
