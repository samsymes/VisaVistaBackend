import express, { Request, Response } from "express";
import RestCountriesService from "../../services/rest-countries.service";

export const RestCountriesRouter = express.Router();
const restCountriesService = new RestCountriesService();

RestCountriesRouter.get(
  "/rest-countries",
  async (req: Request, res: Response) => {
    try {
      const countryInfo = await restCountriesService.fetchCountriesStats();
      res.send(countryInfo);
      console.log("Data", countryInfo);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }
);
