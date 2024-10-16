import { Request, Response, Router } from "express";
import RestCountriesService from "../../services/rest-countries.service";
import { destinationCountryInfo } from "../../utils/dataTransformation";
import { sourceCountryInfo } from "../../utils/dataTransformation";
export const RestCountriesRouter = (router: Router): Router => {
  const restCountriesService = new RestCountriesService();

  router.get("/", (req, res) => {
    console.log("Request", req);
    res.send("Hello from Rest Countries Routes!");
  });

  router.get("/rest-countries", async (req: Request, res: Response) => {
    try {
      const toCountry = req.query.To;
      const fromCountry = req.query.From;
      if (typeof toCountry !== "string" || typeof fromCountry !== "string") {
        res.status(400).send("Invalid country code");
      } else {
        const destinationCountry = await destinationCountryInfo(toCountry);
        const sourceCountry = await sourceCountryInfo(fromCountry);

        res.send({ destinationCountry, sourceCountry });
      }
      // console.log("Data", countryInfo);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });

  return router;
};
