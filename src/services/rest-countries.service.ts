export default class RestCountriesService {
  constructor() {}
  private apiUrl = "https://restcountries.com/v3.1/alpha";

  async fetchCountryData(toCountry: string) {
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
