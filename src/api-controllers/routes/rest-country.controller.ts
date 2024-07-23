import express, { Request, Response } from "express";
import RestCountryService from "../../services/rest-country.service";

export const RestCountryRouter = express.Router();

RestCountryRouter.get("/countryInfo", async (req: Request, res: Response) => {
  const countryData = await RestCountryService.fetchCountryStats();

  res.status(200).json(countryData);
  res.send(countryData);
});
