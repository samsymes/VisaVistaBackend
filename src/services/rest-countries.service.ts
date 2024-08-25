import { count } from "console";

export default class RestCountriesService {
  constructor() {}
  private apiUrl = "https://restcountries.com/v3.1/alpha";

  async fetchCountriesStats(toCountry: string): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/${toCountry}`);
      const countryInfo = await response.json();
      // transform the data
      if (countryInfo) {
        const countryInfoObj = countryInfo.map((country: any) => {
          return {
            name: country.name.common,
            capital: country.capital,
            currency: country.currencies, //object EUR: {name: 'Euro', symbol: '€'}
            timeZones: country.timezones, //array
            population: country.population,
            languages: country.languages, //array
            latLng: country.latlng, //array
          };
        });
        return countryInfoObj;
      }
    } catch (error) {
      console.error("Failed to fetch country stats:", error);

      return { error: "Failed to fetch country stats" };
    }
  }

  async destinationCountryName(To: string): Promise<string> {
    try {
      const countryInfoObj = await this.fetchCountriesStats(To);
      const toCountryName = countryInfoObj.name.common;
      console.log("destinationCountryName is", toCountryName);
      return toCountryName;
    } catch (error) {
      console.error("Failed to fetch country stats:", error);
      return "Country Name not found";
    }
  }
}
