enum Continent {
  Africa = 'AF',
  Antarctica = 'AN',
  Asia = 'AS',
  Europe = 'EU',
  NorthAmerica = 'NA',
  Oceania = 'OC',
  SouthAmerica = 'SA'
};

type Client = {
  id: string,
  name: string,
  continent: Continent;
}

const client = {} as Client;

client.continent === Continent.Europe;

console.log(`👋 from ${Continent.Europe}`);


// fake module
export {};