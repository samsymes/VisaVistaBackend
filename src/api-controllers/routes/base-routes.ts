import { Router } from "express";

export const addBaseRoutes = (router: Router): Router => {
  router.get("/", (req, res) => {
    console.log("Request", req);
    res.send("Hello from Base Routes!");
  });

  router.get("/:id", (req, res) => {
    console.log("Request", req);
    res.send("Hello from :id");
  });

  router.get("/countryInfo", (req, res) => {
    console.log("Request", req);
    res.send("Hello from countryInfo");
  });

  return router;
};
