class User {
  constructor(userName, email) {
    this.userName = userName;
    this.email = email;
    

    this.portfolio = () => {
      let myPortfolio = new Portfolio();
      return myPortfolio;
    };

    this.showPortfolio = () => {
      console.log(this.portfolio);
    };

    this.wishlist = () => {
      let myWishlist = new Wishlist();
      return myWishlist;
    };

    this.showWishlist = () => {
      console.log(this.portfolio);
    };
  }
}

class Portfolio {
  constructor() {
    this.list = [];
    this.addStock = (stock) => {
      let stockItem = new Stock(stock);
      this.list.push(stockItem);
    };
    this.deleteStock = () => {
      this.list.pop();
    };
    this.displayList = () => {
      console.log(this.list);
    };
  }
}

class Wishlist {
  constructor() {
    this.list = [];
    this.addStock = (stock) => {
      let stockItem = new Stock(stock);
      this.list.push(stockItem);
    };
    this.deleteStock = () => {
      this.list.pop();
    };
    this.displayList = () => {
      console.log(this.list);
    };
  }
}

class Stock {
  constructor(name, stockSymbol) {
    this.name = name;
    this.stockSymbol = stockSymbol;
  }
}

let stock = new Stock("Tata", "TAT");
let wishlist1 = new Wishlist();
wishlist1.addStock(stock);
