type Version<VNumber extends number, T = { version?: number }> = Omit<
  T,
  'version'
> & { version: VNumber };

type ClientV1 = Version<
  1,
  {
    id: string;
    name: string;
    WasCreatedOnDate: Date;
  }
>;

type ClientV2 = Version<
  2,
  Omit<ClientV1, 'WasCreatedOnDate'> & {
    createdOnUTC: string;
    refId: string;
  }
>;

type ClientV3 = Version<3, ClientV2 & { isRepresentative: boolean }>;

type Client = ClientV1 | ClientV2 | ClientV3;

const client = {} as Client;
client.version;

if (client.version === 1) {
  client.WasCreatedOnDate;
  client.version;
}

export {};
