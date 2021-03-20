type PhoneFeatures = {
  isWaterproof: boolean;
  ramAmount: number;
  cpu: string;
  screen: number;
};

// we are mapping each key of PhoneFeatures type to new field of
// FeaturesChecks type. And each of this field has boolean value
type FeaturesChecks = {
  [Key in keyof PhoneFeatures]: boolean;
};

const featuresChecks: FeaturesChecks = {
  cpu: true,
  isWaterproof: false,
  ramAmount: true,
  screen: true,
};

// this time, we would like to create new type LazyFeaturesValues which
// will contain fields same as PhoneFeatures type, but will be
// a function which return this value. So - same type as the value.
// Thats why we used indexed access types (PhoneFeatures[Key]) ;)
type LazyFeaturesValues = {
  [Key in keyof PhoneFeatures]: () => PhoneFeatures[Key];
};

const lazyFeaturesValues: LazyFeaturesValues = {
  cpu: () => 'fast',
  isWaterproof: () => true,
  ramAmount: () => 8,
  screen: () => 100,
};

// to be honest, while creating mapped types we only need string literal
// like in this example
type ProductType = 'sale' | 'premiere' | 'standard';

type ProductTypeMatrix = {
  [Key in ProductType]: boolean;
};

const productTypeMatrix: ProductTypeMatrix = {
  premiere: true,
  sale: true,
  standard: false,
};

export {};
