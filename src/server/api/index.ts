import express, { Express, Request, Response } from "express";
import cors from "cors";
import data from "./data.json";

const app: Express = express();
const port = process.env.PORT || 8080;
app.use(cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/companies", (req: Request, res: Response) => {
  const filters = req.query;
  const specialtyFilter = filters?.specialty?.toString().toLowerCase();
  const nameFilter = filters?.search?.toString().toLowerCase();
  if (!nameFilter && !specialtyFilter) {
    res.send(data);
    return;
  }
  const filtered = data.filter((company) => {
    const isValidName =
      (nameFilter && company.name.toLowerCase().includes(nameFilter)) ||
      typeof nameFilter === "undefined";
    const isValidSpecialty =
      (specialtyFilter && company.specialties.includes(specialtyFilter)) ||
      typeof specialtyFilter === "undefined";
    return isValidName && isValidSpecialty;
  });
  res.send(filtered);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
