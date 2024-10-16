import RestCountriesService from "../services/rest-countries.service";
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
  // is 58 correct?
  countryInfoObject: CountryObject[]
): TransformedCountry[] {
  if (!countryInfoObject) {
    throw new Error("Unable to transform country data");
  } else {
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
        capital: country.capital, //why is this returning an array?
        currencies,
        symbols,
        timeZones: country.timezones,
        population: country.population.toLocaleString(),
        languages,
        latlng: country.latlng,
      };
    });
  }
}
