// ofc we can use run-time validation as alternative
// here I focussed only on compilation time validation

type ProductApi = {
  id: string;
  description: string;
  price: number;
  version: 3;
};

type Product = Omit<ProductApi, 'version'>;

type DisplayProduct = Product;

// condition type which checks the structure
type AssertStructure<TFrom, TTo> = TFrom extends TTo
  ? Exclude<keyof TFrom, keyof TTo> extends never
    ? TFrom
    : never
  : never;

// only to check types
function assertStructure<TFrom, TTo>(item: AssertStructure<TFrom, TTo>): TTo {
  return item;
}

// product transformations
function transformProduct(productApi: ProductApi): Product {
  // 👇 won't compile, so we have to transform
  //   return assertStructure(productApi);
  
  const product: Product = {
    id: productApi.id,
    description: productApi.description,
    price: productApi.price,
  };

  return assertStructure(product);
}

export {};