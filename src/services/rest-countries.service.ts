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
            currencies: country.currencies, //[object Object] does not work
            timeZones: country.timezones.join(", "),
            population: country.population.toLocaleString(),
            languages: Object.values(country.languages).join(", "),
            lat: country.latlng[0],
            lng: country.latlng[1],
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
