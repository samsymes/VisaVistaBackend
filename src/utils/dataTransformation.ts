import { CountryObject } from "../services/rest-country-types/rest-countries.types";
import { TransformedCountry } from "../services/rest-country-types/rest-countries.types";

export function transformCountryData(
  // is 25 correct?
  countryInfoObject: CountryObject[]
): TransformedCountry[] {
  if (!countryInfoObject) {
    throw new Error("Unable to transform country data");
  } else {
    const countryInfo = countryInfoObject[0];
    console.log("countryInfo type of", typeof countryInfo);
    if (!countryInfo) {
      throw new Error("Country info is undefined");
    }
    return countryInfoObject.map((country: CountryObject) => {
      const currencies = Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ");
      const symbols = Object.values(country.currencies)
        .map((currency) => currency.symbol)
        .join(", ");
      const languages = Object.values(country.languages).join(", ");

      return {
        name: country.name.common,
        capital: country.capital, //why is this returning an array?
        currencies,
        symbols,
        timeZones: country.timezones,
        population: country.population.toLocaleString(),
        languages,
        latlng: country.latlng,
      };
    });
  }
}
