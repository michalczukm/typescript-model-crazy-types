type PhoneProduct = {
  name: string;
  price: number;
  parameters: {
    cpu: number;
    isWaterproof: boolean;
    graphicCard: string;
  };
};

// this one is pure example of indexed access types usage
// we would like to create type, which will be same as type of
// `parameters` fiels in PhoneProduct type
type PhoneParameters = PhoneProduct['parameters'];

// we can also use it inline - just directly in parameter type
function phoneParamsReport(parameters: PhoneProduct['parameters']): string {
  return `${parameters.cpu} 
        | ${parameters.graphicCard} 
        | ${parameters.isWaterproof}`;
}

export {};
