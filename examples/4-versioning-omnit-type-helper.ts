type ClientV1 = {
  id: string;
  name: string;
  version: 1;
  WasCreatedOnDate: Date;
};

type ClientV2 = Omit<ClientV1, 'WasCreatedOnDate'> & {
  version: 2;
  createdOnUTC: string;
  refId: string;
};

// but can we do it better?
type Client = ClientV1 | ClientV2;

const client = {} as Client;

export {};
