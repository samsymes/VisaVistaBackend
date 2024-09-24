import RestCountriesService from "../src/services/rest-countries.service";
describe("RestCountriesService", () => {
  const service = new RestCountriesService();

  test("should fetch country by name", async () => {
    const countryName = "Ca";
    const country = await service.destinationCountryInfoObject(countryName);
    expect(country.name).toBe("Canada");
  });

  test("should return null for non-existent country", async () => {
    const countryName = "NonExistentCountry";
    const country = await service.destinationCountryInfoObject(countryName);
    expect(country).toBeNull();
  });
});
