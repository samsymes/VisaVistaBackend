export type CountryObject = {
  name: { common: string };
  capital: string;
  currencies: { [key: string]: { name: string; symbol: string } };
  timezones: string[];
  population: number;
  languages: string[];
  latlng: [number, number];
};

export type TransformedCountry = {
  name: string;
  capital: string;
  currencies: string;
  symbols: string;
  timeZones: string | string[];
  population: string;
  languages: string | string[];
  latlng: [number, number];
};
