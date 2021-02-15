type ClientRevenue = {
  clientId: string,
  revenue: number
};

type Contact = {
  country: string,
  phoneNumber: string
};










type ClientRow = [{ id: string }, ClientRevenue, Contact];








const row = [] as unknown as ClientRow;
row[2].country;

// fill live


// fake module
export {};