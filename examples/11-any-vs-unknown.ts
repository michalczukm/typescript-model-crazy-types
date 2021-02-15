type Client = {
  unknownAddress: unknown
  anyInvoicing: any
};

const client = {} as Client;









client.anyInvoicing.something().not.existing.nanan(); // well. It compiles

client.unknownAddress(); // --> it won't compile. 
client.unknownAddress = 'asddas'; // --> it will compile.

//You cannot access unknown fields. Since they're ... you know, unknown 😉



(client.unknownAddress as { country: string}).country; // --> type assertion is the only option


// fake module
export {};