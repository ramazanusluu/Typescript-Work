class Shop {
  constructor(_productName: string, _piece: number, _unitPrice: number) {
    this.productName = _productName;
    this.piece = _piece;
    this.unitPrice = _unitPrice;
  }
  productName: string;
  piece: number;
  unitPrice: number;

  GetProductInfo(): string {
    return (
      "Product Name : " +
      this.productName +
      " Piece : " +
      this.piece +
      " Unit Price : " +
      this.unitPrice +
      " Total : " +
      this.piece * this.unitPrice
    );
  }
}

let data = new Shop("Asus", 100, 5);
console.log(data.GetProductInfo());

data.productName = "Apple";
data.piece = 4500;
data.unitPrice = 2;

console.log(data.GetProductInfo());
