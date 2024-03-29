import express from "express";
import corse from "cors";

const app = express();
app.use(
  corse({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.static("public"));

export { app };
