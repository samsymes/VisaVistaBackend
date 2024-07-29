export default class RestCountryService {
  constructor() {}
  private apiUrl = "https://restcountries.com/v3.1/all";

  async fetchCountryStats(): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const countryInfo = await response.json();
      console.log("Data", countryInfo);
      return countryInfo;
    } catch (error) {
      console.error("Failed to fetch country stats:", error);

      return { error: "Failed to fetch country stats" };
    }
  }
}
