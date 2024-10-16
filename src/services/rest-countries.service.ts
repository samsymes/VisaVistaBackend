export default class RestCountriesService {
  constructor() {}
  private apiUrl = "https://restcountries.com/v3.1/alpha";

  async fetchCountryData(toCountry: string): Promise<CountryObject[]> {
    try {
      const response = await fetch(`${this.apiUrl}/${toCountry}`);
      console.log("response type of", typeof response);
      const countryInfoObject: CountryObject[] = await response.json();
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
