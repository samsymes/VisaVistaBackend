export default class RestCountriesService {
  constructor() {}
  private apiUrl = "https://restcountries.com/v3.1/alpha?codes=";

  async fetchCountriesStats(
    fromCountry: string,
    toCountry: string
  ): Promise<any> {
    try {
      const response = await fetch(
        `${this.apiUrl}/${fromCountry},${toCountry}`
      );
      console.log(
        "FROM BACKEND SERVER:",
        "to:",
        toCountry,
        "from",
        fromCountry
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const countryInfo = await response.json();
      return countryInfo;
    } catch (error) {
      console.error("Failed to fetch country stats:", error);

      return { error: "Failed to fetch country stats" };
    }
  }
}
