type ClientV1 = {
  id: string;
  name: string;
  version: 1;
  WasCreatedOnDate: Date;
};

type ClientV2 = {
  id: string;
  name: string;
  version: 2;
  createdOnUTC: string;
  refId: string;
};

// works, but we will have
//  a lot, a lot od duplicated fields ☹️
//  instead of 'schema migration'
type Client = ClientV1 | ClientV2;

const client = {} as Client;

if (client.version === 1) {
  client.WasCreatedOnDate;
}

export {};
