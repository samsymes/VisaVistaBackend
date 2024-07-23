class RestCountryService {
  async fetchCountryStats() {
    const url = "https://restcountries.com/v3.1/all";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  }
}
export default new RestCountryService();
