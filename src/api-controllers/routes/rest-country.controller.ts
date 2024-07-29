import express, { Request, Response } from "express";
import RestCountryService from "../../services/rest-country.service";

export const RestCountryRouter = express.Router();
const restCountryService = new RestCountryService();

RestCountryRouter.get("/countryInfo", async (req: Request, res: Response) => {
  try {
    const countryInfo = restCountryService.fetchCountryStats; //returns the function, not the data
    console.log("Country Info", countryInfo);
    res.send(countryInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
