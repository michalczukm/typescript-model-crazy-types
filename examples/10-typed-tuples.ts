type ClientRevenue = {
  clientId: string;
  revenue: number;
};

type Contact = {
  country: string;
  phoneNumber: string;
};

type ClientRow = [{ id: string }, ClientRevenue, Contact];

declare const row: ClientRow;

row[0].id;
row[1].clientId;
row[2].country;

// row[0].clientId; <-- won't compile

export {};
