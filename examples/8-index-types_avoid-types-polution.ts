type Phone = {
  id: string,
  features: {
    isWaterproof: boolean,
    ramAmount: number,
    cpu: string
  },
  promotedFeature: keyof Phone['features']
}



const phone = {} as Phone;
phone.promotedFeature = 'cpu';



// how about create types with "features checks" based on this


const lazyChecks = {
  cpu: () => 'cool one',
  isWaterproof: () => 'skskskskdsajkdh',
  ramAmount: () => 'maaaaany'
}





type FeaturesChecks = {
  [K in keyof Phone['features']]: () => Phone['features'][K]
};






const featuresChecks: FeaturesChecks = {
  cpu: () => 'fast',
  isWaterproof: () => true,
  ramAmount: () => 8
};


// fake module
export {};