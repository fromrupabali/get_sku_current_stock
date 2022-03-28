const stocks = require("../models/stock.json");
const transactions = require("../models/transactions.json");

//Variables
let existInStock = false,
  existInTransaction = false,
  currentStock = 0;

const getTransaction = (sku) =>
  // Check the stok data to find stock by sku
  Promise.resolve(
    transactions.find(function (transaction) {
      if (transaction.sku == sku) {
        existInTransaction = true;
        currentStock -= transaction.qty;
      }
    })
  );
const getStock = (sku) =>
  // Check the transaction data to find transactions by sku
  Promise.resolve(
    stocks.find(function (stk) {
      if (stk.sku == sku) {
        existInStock = true;
        currentStock = stk.stock;
      }
    })
  );

exports.getSkuStock = (sku) => {
  if (!sku) {
    throw new Error("SKU not provided!");
  }
  //Check sku in stock
  getStock(sku);

  //check sku in transaction
  getTransaction(sku);

  if (!existInStock && !existInTransaction) {
    //If sku doesn't exist in stock and transaction throw error
    throw new Error("SKU doesn't exist in stoks and transactions");
  } else {
    //When sku doesn't exist in stock but exist in transaction stock return a negative number
    return currentStock;
  }
};
