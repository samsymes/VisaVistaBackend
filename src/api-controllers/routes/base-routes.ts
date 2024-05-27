import { Router } from "express";

export const addBaseRoutes = (router: Router): Router => {
  router.get("/", (req, res) => {
    console.log("Request", req);
    res.send("Hello world!");
  });

  router.get("/:id", (req, res) => {
    console.log("Request", req);
    res.send("Hello world!");
  });

  return router;
};
