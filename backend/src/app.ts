import express, { Request, Response } from "express";


export const app = express();

const mobs = [{
  name: "Kåda"
},
{name: "Spicy"},
{name: "Infinågot"}];


app.get("/api/v1/mobs", (req: Request, resp: Response) => {
  resp.status(200).json(mobs);
});

app.post("/api/v1/mobs/", (req: Request, resp: Response) => {
  resp.status(200).json([]);
});

app.get("/api/v1/mobs/:mobId", (req: Request, resp: Response) => {
  resp.status(200).json([]);
});

app.get("/api/v1/mobs/:mobId/members", (req: Request, resp: Response) => {
  resp.status(200).json([]);
});

app.post("/api/v1/mobs/:mobId/members", (req: Request, resp: Response) => {
  resp.status(200).json([]);
});

app.post("/api/v1/mobs/:mobId/members/:memberId", (req: Request, resp: Response) => {
  resp.status(200).json([]);
});
