type Client = {
  id: string;
  address: {
    country: string;
    postCode: string;
  };
  invoicingModel: 0.1 | 2 | 'individual' | 'company';
};

function handle(invoicingModel: 0.1 | 2 | 'individual' | 'company') {
  //...
}

function handle2(invoicingModel: Client['invoicingModel']) {
  //...
}

// go deeper in rabbit hole
type Country = Client['address']['country'];

export {};
