export class RestCountryService {
  private apiUrl = "https://restcountries.com/v3.1/all";

  async fetchCountryStats(): Promise<any> {
    const url = `${this.apiUrl}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch country data `);
    }

    const data = await response.json();
    console.log("Data", data);
    return data;
  }
}
