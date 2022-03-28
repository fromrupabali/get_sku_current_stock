const express = require("express");
const app = express();

const { getSkuStock } = require("./controllers/getSkuStock");

const sku = "LTV719449/39/39";
console.log(`Current stok of ${sku} : `, getSkuStock(sku));

const PORT = process.env.port || 4000;
app.listen(PORT, () => {
  console.log(`Server is linstening on ${PORT}`);
});
