import { Router } from "express";

export const addBaseRoutes = (router: Router): Router => {
  router.get("/", (req, res) => {
    console.log("Request", req);
    res.send("Hello from Base Routes!");
  });

  router.get("/:id", (req, res) => {
    console.log(res);
    res.send("hello from base routes with id: ");
  });

  return router;
};
