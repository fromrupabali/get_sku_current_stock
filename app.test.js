const { getSkuStock } = require("./controllers/getSkuStock");

describe("Test all diferent cases og get sku stock", () => {
  it("Get the current sku stok correct result", () => {
    expect(getSkuStock("LTV719449/39/39")).toBe(8472);
  });
  it("Get the current sku stok correct result", () => {
    expect(getSkuStock("LTV719449/39/39")).toBe(872);
  });
  it("Expect error when sku doesn't exist in stock and transaction", () => {
    const err = () => {
      throw new Error("SKU doesn't exist in stoks and transactions");
    };
    expect(getSkuStock("LTV719449/39auduas/39")).toThrow(err);
  });
});
