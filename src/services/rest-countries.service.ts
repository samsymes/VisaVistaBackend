import { transformCountryData } from "../utils/dataTransformation";
import { CountryObject } from "./rest-country-types/rest-countries.types";
import { TransformedCountry } from "./rest-country-types/rest-countries.types";
export default class RestCountriesService {
  constructor() {}
  private apiUrl = "https://restcountries.com/v3.1/alpha";

  async fetchCountryData(toCountry: string): Promise<CountryObject[]> {
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
