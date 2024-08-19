import { Request, Response, Router } from "express";
import RestCountriesService from "../../services/rest-countries.service";

export const RestCountriesRouter = (router: Router): Router => {
  const restCountriesService = new RestCountriesService();

  router.get("/", (req, res) => {
    console.log("Request", req);
    res.send("Hello from Rest Countries Routes!");
  });

  // Update the route to handle query parameters
  router.get("/rest-countries", async (req: Request, res: Response) => {
    try {
      const toCountry = req.query.To as string;
      const countryInfo = await restCountriesService.fetchCountriesStats(
        toCountry
      );
      res.send(countryInfo);
      console.log("Data", countryInfo);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });

  return router;
};
