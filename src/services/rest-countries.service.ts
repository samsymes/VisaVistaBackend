export default class RestCountriesService {
  private apiUrl = "https://restcountries.com/v3.1/alpha";

  async fetchCountryData(toCountry: string): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/${toCountry}`);
      const countryInfoObject = await response.json();
      return countryInfoObject;
    } catch (error) {
      console.error("Failed to fetch country data:", error);
      throw error;
    }
  }

  transformCountryData(countryInfoObject: any): any {
    const countryInfo = countryInfoObject[0];
    console.log(countryInfo);

    if (countryInfo) {
      return countryInfoObject.map((country: any) => {
        const currencies = Object.values(country.currencies)
          .map((currency: any) => currency.name)
          .join(", ");
        const symbols = Object.values(country.currencies)
          .map((currency: any) => currency.symbol)
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
      })[0];
    }
    return null;
  }

  async destinationCountryInfoObject(toCountry: string): Promise<any> {
    try {
      const countryInfoObject = await this.fetchCountryData(toCountry);
      return this.transformCountryData(countryInfoObject);
    } catch (error) {
      console.error("Failed to fetch country stats:", error);
      return { error: "Failed to fetch country stats" };
    }
  }
}
