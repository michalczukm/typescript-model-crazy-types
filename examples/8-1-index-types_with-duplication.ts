type Phone = {
  id: string;
  features: {
    isWaterproof: boolean;
    ramAmount: number;
    cpu: string;
  };
  promotedFeature: 'isWaterproof' | 'ramAmount' | 'cpu';
};

function handle(features: Phone['features']) {
  features.isWaterproof;
}

export {};
