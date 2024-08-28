export default class RestCountriesService {
  constructor() {}
  private apiUrl = "https://restcountries.com/v3.1/alpha";

  async fetchCountriesStats(toCountry: string): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/${toCountry}`);
      const countryInfo = await response.json();
      console.log(countryInfo);
      if (countryInfo) {
        const countryInfoObj = countryInfo.map((country: any) => {
          return {
            name: country.name.common,
            capital: country.capital,
            currencies: Object.values(country.currencies).join(", "),
            timeZones: country.timezones,
            population: country.population.toLocaleString(),
            languages: Object.values(country.languages).join(", "),
            lat: Number(country.latlng?.[0]), //works
            lng: Number(country.lanlng?.[1]), //does not work
          };
        });

        return countryInfoObj[0];
      }
    } catch (error) {
      console.error("Failed to fetch country stats:", error);

      return { error: "Failed to fetch country stats" };
    }
  }
}
