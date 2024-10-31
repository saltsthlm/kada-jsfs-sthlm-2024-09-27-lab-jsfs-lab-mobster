import express, { Request, Response } from "express";

export const mobsRouter = express.Router();

const mobs = [{
  name: "Kåda"
},
{name: "Spicy"},
{name: "Infinågot"}];

mobsRouter.get("/", (req: Request, res: Response) => {
  res.status(200).json(mobs);
});

