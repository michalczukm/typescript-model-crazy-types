type BaseProduct = {
  id: string,
  price: number
};

type MarketingProduct = BaseProduct & {
  type: 'marketing',
  description: string,
  marketingName: string,
};

type StockProduct = BaseProduct & {
  type: 'stock',
  amountInStock: number
};

type Product = MarketingProduct | StockProduct;

declare const product: Product;

product.price; // always available

// ==== the if way
if (product.type == 'marketing') {
  // product.amountInStock // --> won't compile!
  product.marketingName;
} else {
  product.amountInStock;
  // product.marketingName; // --> won't compile!
}


// ==== the type guard way
function isMarketingProduct(product: Product): product is MarketingProduct {
  return product.type === 'marketing';
}

if (isMarketingProduct(product)) {
  // product.amountInStock // --> won't compile!
  product.marketingName;
} else {
  product.amountInStock;
  // product.marketingName; // --> won't compile!
}

export {};