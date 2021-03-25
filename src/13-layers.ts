type ProductApi = {
    id: string;
    description: string;
    price: number;
    version: 3;
  };
  
  type Product = Omit<
      ProductApi, 
      'version'
  >;
  
  type DisplayProduct = Product;
  
  const productApi: ProductApi = {
    id: '1-1',
    description: 'phone',
    price: 100,
    version: 3
  };
  
  function renderProduct(product: DisplayProduct) {
    // do the job
  }
  
  renderProduct(productApi);
  
  export {};