import { Request, Response, Router } from "express";
import { destinationCountryInfo } from "../../services/rest-countries.service";
import { sourceCountryInfo } from "../../services/rest-countries.service";
export const RestCountriesRouter = (router: Router): Router => {
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
