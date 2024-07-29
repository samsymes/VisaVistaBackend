import express, { Request, Response } from "express";
import { RestCountryService } from "../../services/rest-country.service";

export const RestCountryRouter = express.Router();
const restCountryService = new RestCountryService();

RestCountryRouter.get("/countryInfo", async (req: Request, res: Response) => {
  try {
    const countryData = await restCountryService.fetchCountryStats();

    res.send(countryData);
  } catch (error) {
    console.error("Error fetching country data", error);
    res.status(500).send(error);
  }
});
