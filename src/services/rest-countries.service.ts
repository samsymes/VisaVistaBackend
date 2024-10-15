export default class RestCountriesService {
  constructor() {}
  private apiUrl = "https://restcountries.com/v3.1/alpha";

  async fetchCountryData(toCountry: string): Promise<CountryObject[]> {
    try {
      const response = await fetch(`${this.apiUrl}/${toCountry}`);
      console.log("response type of", typeof response);
      const countryInfoObject = await response.json();
      return countryInfoObject;
    } catch (error) {
      console.error("Failed to fetch country data:", error);
      throw error;
    }
  }
}
type CountryObject = {
  name: { common: string };
  capital: string;
  currencies: { [key: string]: { name: string; symbol: string } };
  timezones: string[];
  population: number;
  languages: string[];
  latlng: [number, number];
};

type TransformedCountry = {
  name: string;
  capital: string;
  currencies: string;
  symbols: string;
  timeZones: string | string[];
  population: string;
  languages: string | string[];
  latlng: [number, number];
};

export async function destinationCountryInfo(
  toCountry: string
): Promise<TransformedCountry[]> {
  try {
    const restCountryService = new RestCountriesService();
    const destinationCountry = await restCountryService.fetchCountryData(
      toCountry
    );
    console.log("destination country type of", typeof destinationCountry);
    const transformedCountry = transformCountryData(destinationCountry);
    return transformedCountry;
  } catch (error) {
    console.error("Failed to fetch country stats:", error);
    return [];
  }
}
export async function sourceCountryInfo(
  fromCountry: string
): Promise<TransformedCountry[]> {
  try {
    const restCountriesService = new RestCountriesService();
    const sourceCountry = await restCountriesService.fetchCountryData(
      fromCountry
    );
    console.log("source country type of", typeof sourceCountry);
    const transformedSourceCountry = transformCountryData(sourceCountry);
    return transformedSourceCountry;
  } catch (error) {
    console.error("Failed to fetch country stats:", error);
    return [];
  }
}

export function transformCountryData(
  countryInfoObject: CountryObject[]
): TransformedCountry[] {
  try {
    const countryInfo = countryInfoObject[0];
    console.log("countryInfo type of", typeof countryInfo);
    if (!countryInfo) {
      throw new Error("Country info is undefined");
    }
    return countryInfoObject.map((country: CountryObject) => {
      const currencies = Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ");
      const symbols = Object.values(country.currencies)
        .map((currency) => currency.symbol)
        .join(", ");
      const languages = Object.values(country.languages).join(", ");

      return {
        name: country.name.common,
        capital: country.capital,
        currencies,
        symbols,
        timeZones: country.timezones,
        population: country.population.toLocaleString(),
        languages,
        latlng: country.latlng,
      };
    });
  } catch (error) {
    console.error("Failed to transform country data:", error);
    throw error;
  }
}
