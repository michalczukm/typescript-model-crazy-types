type ProductType = 'sale' | 'premiere' | 'standard';

// we can add extra modifier to fields - like optional (?)
type OptionalProductTypeMatrix = {
  [Key in ProductType]?: boolean;
};

const optionalMatrix: OptionalProductTypeMatrix = {
  premiere: true,
};


// or readonly
type ReadonlyProductTypeMatrix = {
  readonly [Key in ProductType]: boolean;
};

const readonlyMatrix: ReadonlyProductTypeMatrix = {
  premiere: true,
  sale: false,
  standard: true
};

// this won't compile - because it is readonly :)
// readonlyMatrix.premiere = false;

export {};
