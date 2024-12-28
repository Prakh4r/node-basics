import express from "express";
import type {Request, Response } from "express";

const app = express();
const PORT = Bun.env.PORT || 3000;

app.get("/", (_request: Request, response: Response) => {
  return response.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
