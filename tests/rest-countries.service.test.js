import RestCountriesService from "../src/services/rest-countries.service";
import transformCountryData from "../src/utils/dataTransformation";
// describe("RestCountriesService", () => {
//   const service = new RestCountriesService();

//   test("should fetch country by name", async () => {
//     const countryName = "Ca";
//     const country = await service.destinationCountryInfoObject(countryName);
//     expect(country.name).toBe("Canada");
//   });

//   test("should return null for non-existent country", async () => {
//     const countryName = "NonExistentCountry";
//     const country = await service.destinationCountryInfoObject(countryName);
//     expect(country).toBeNull();
//   });
// });

// Call the API to get an example of mock data
// Store that in an object in the test (the point here is the data is in the same format as what would be returned from 3rd party country API)
// In test - pass this mock data object into the formatting/converting function, and then check results of that function ex a bunch of expect calls like this on the response:
// expect(country.name).toBe("Canada");
// Assuming fetchCountryData is an async function that fetches API data

describe("Country Data Formatting", () => {
  test("should correctly format country data from API", async () => {
    const service = new RestCountriesService();

    const mockApiData = await service.fetchCountryData("Ca");

    const formattedCountry = await transformCountryData(mockApiData);

    // expect(formattedCountry.capital).toBe("Ottawa");
    expect(formattedCountry.currencies).toBe("Canadian dollar");
    expect(formattedCountry.languages).toBe("English, French");
    // expect(formattedCountry.latlng).toEqual([60, -95]); // Arrays require toEqual()
    expect(formattedCountry.name).toBe("Canada");
    expect(formattedCountry.population).toBe("38,005,238");
    expect(formattedCountry.symbols).toBe("$");
    // expect(formattedCountry.timeZones).toEqual([
    //   "UTC-08:00",
    //   "UTC-07:00",
    //   "UTC-06:00",
    //   "UTC-05:00",
    //   "UTC-04:00",
    //   "UTC-03:30",
    // ]);
  });
});
