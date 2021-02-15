type MarketingProduct = {
  id: string,
  type: 'marketing',
  description: string,
  marketingName: string,
  price: number
};

type StockProduct = {
  id: string,
  type: 'stock',
  price: number,
  amountInStock: number
};

type Product = MarketingProduct | StockProduct;


const product = {} as Product;

product.price; // always available

// ==== the if way
if(product.type === 'marketing') {
  product.marketingName;
}else{
  product.amountInStock
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


// fake module
export {};