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
app.use("/users", (req, res) => {
  // This function will be called when a GET request is made to '/api/users'
  // You can perform any logic here, such as querying a database, and then send a response back

  // For example, send a JSON response with dummy data
  res.json({
    users: [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ],
  });
});

export { app };
