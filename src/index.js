import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "../env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5555, () => {
      console.log("server is running at : ", process.env.PORT);
    });
  })
  .catch((err) => console.log("MongoDB connection failed : ", err));
