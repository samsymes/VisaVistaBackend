export default class RestCountriesService {
  constructor() {}
  private apiUrl = "https://restcountries.com/v3.1/alpha";

  async fetchCountryData(toCountry: string): Promise<object[]> {
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
export function transformCountryData(
  countryInfoObject: object[]
): Promise<object> {
  try {
    const countryInfo = countryInfoObject[0];
    console.log("countryInfo type of", typeof countryInfo);
    if (!countryInfo) {
      throw new Error("Country info is undefined");
    }
    return countryInfoObject.map((country: object) => {
      const currencies = Object.values(country.currencies)
        // left type out, as it is not clear what the type is. Will come back to this.
        .map((currency: string[]) => currency.name)
        .join(", ");
      const symbols = Object.values(country.currencies)
        .map((currency: string[]) => currency.symbol)
        .join(", ");
      const languages = Object.values(country.languages).join(", ");

      return {
        name: country.name.common,
        capital: country.capital,
        currencies,
        symbols,
        timeZones: country.timezones.join(", "),
        population: country.population.toLocaleString(),
        languages,
        lat: country.latlng[0],
        lng: country.latlng[1],
      };
    });
  } catch (error) {
    console.error("Failed to transform country data:", error);
    throw error;
  }
}

export async function destinationCountryInfo(
  toCountry: string
): Promise<object> {
  try {
    const restCountryService = new RestCountriesService();
    const destinationCountry = await restCountryService.fetchCountryData(
      toCountry
    );
    console.log("destination country type of", typeof destinationCountry);
    transformCountryData(destinationCountry);
    return destinationCountry;
  } catch (error) {
    console.error("Failed to fetch country stats:", error);
    return { error: "Failed to fetch country stats" };
  }
}
export async function sourceCountryInfoObject(
  this: object,
  fromCountry: string
): Promise<object> {
  try {
    const restCountriesService = new RestCountriesService();
    const sourceCountry = await restCountriesService.fetchCountryData(
      fromCountry
    );
    console.log("source country type of", typeof sourceCountry);
    transformCountryData(sourceCountry);
    return sourceCountry;
  } catch (error) {
    console.error("Failed to fetch country stats:", error);
    return { error: "Failed to fetch country stats" };
  }
}
