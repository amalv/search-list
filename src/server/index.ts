import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 8080;
const url = String(process.env.HOSTNAME).split("-");

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
