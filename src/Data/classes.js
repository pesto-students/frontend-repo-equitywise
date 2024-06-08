const finnhub = require("finnhub");

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "cpibh8hr01qpf0qhejg0cpibh8hr01qpf0qhejgg"; // Replace this
const finnhubClient = new finnhub.DefaultApi();

// Stock symbols
finnhubClient.stockSymbols("BO", (error, data, response) => {
  console.log(data);
  console.log(error);
  console.log(response);
});

class User {
  constructor(userName, email) {
    this.userName = userName;
    this.email = email;
    this.wishlists = [];
    this.portfolio = new Portfolio();
    this.createNewWishlist = (name) => {
      let myWishlist = new Wishlist(name);
      this.wishlists.push(myWishlist);
    };
    this.showPortfolio = () => console.log(this.portfolio());
    this.displayWishLists = () => console.log(this.wishlists);
  }
}

class Portfolio {
  constructor() {
    this.list = [];
    this.addStock = (stockName) => {
      let stockItem = new Stock(stockName);
      this.list.push(stockItem);
    };
    this.deleteStock = () => {
      this.list.forEach((item) => {
        console.log(item.totalQuantity);
        if (item.totalQuantity === 0) {
          // let index = indexOf(item);
          // delete this.list[index];
        }
      });
    };
    this.displayList = () => console.log(this.list);
    // this.deleteStock();
  }
}

class Wishlist {
  constructor(name) {
    this.name = name;
    this.list = [];
    this.addStock = (stockName) => {
      let stockItem = new Stock(stockName);
      this.list.push(stockItem);
    };
    this.deleteStock = () => {
      this.list.pop();
    };
    this.displayList = () => console.log(this.list);
    this.list();
  }
}

class Stock {
  constructor(name) {
    this.name = name;
    this.transactionStatement = [];
    this.totalQuantity = 0;
    this.totalCost = 0;
    this.averageCost = 0;
    this.buyStock = (quantity, rate) => {
      let transaction = ["buy", new Date(), quantity, rate];
      this.transactionStatement.push(transaction);
      this.totalQuantity = this.totalQuantity + quantity;
      let amount = quantity * rate;
      this.totalCost = this.totalCost + amount;
      this.averageCost = this.totalCost / this.totalQuantity;
    };
    this.sellStock = (quantity) => {
      if (this.totalQuantity >= 0) {
        let transaction = ["sell", new Date(), quantity, this.averageCost];
        this.transactionStatement.push(transaction);
        this.totalQuantity = this.totalQuantity - quantity;
        let amount = quantity * this.averageCost;
        this.totalCost = this.totalCost - amount;
        if (this.totalCost !== 0) {
          this.averageCost = this.totalCost / this.totalQuantity;
        } else {
          this.averageCost = 0;
        }
      }
    };
    this.displayTotalQuantity = () => console.log(this.totalQuantity);
    this.displayAverageCost = () => console.log(this.averageCost);
    this.displayTransactionStatement = () => console.log(this.transactionStatement);
  }
}

// Code for Testing the above code
// let shrishyle = new User("shrishyle", "shrishyle.pandit@gmail.com");
// shrishyle.portfolio.addStock("Alembic Pharma");
// shrishyle.portfolio.addStock("ICICI Prudential");
// shrishyle.portfolio.list[0].buyStock(100, 20);
// shrishyle.portfolio.list[1].buyStock(53, 20);
// shrishyle.portfolio.list[1].buyStock(33, 50);
// shrishyle.portfolio.list[0].buyStock(50, 25);
// shrishyle.portfolio.list[0].buyStock(50, 30);
// shrishyle.portfolio.list[0].sellStock(50);
// shrishyle.portfolio.displayList();
// shrishyle.portfolio.list[0].displayAverageCost();
// shrishyle.portfolio.list[0].displayTotalQuantity();
// // shrishyle.portfolio.list[0].sellStock(150);
// shrishyle.portfolio.list[0].displayTransactionStatement();
// shrishyle.portfolio.displayList();

// export { shrishyle };
