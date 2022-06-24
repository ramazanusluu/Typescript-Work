class Shop {
    constructor(_productName, _piece, _unitPrice) {
        this.productName = _productName;
        this.piece = _piece;
        this.unitPrice = _unitPrice;
    }
    GetProductInfo() {
        return ("Product Name : " +
            this.productName +
            " Piece : " +
            this.piece +
            " Unit Price : " +
            this.unitPrice +
            " Total : " +
            this.piece * this.unitPrice);
    }
}
let data = new Shop("Asus", 100, 5);
console.log(data.GetProductInfo());
data.productName = "Apple";
data.piece = 4500;
data.unitPrice = 2;
console.log(data.GetProductInfo());
