import express from "express";
import {review} from "./src/data.js"
const app = express();

app.get("/review", (req, res) => {
  res.send(review);
});

app.listen( 3000, () => {
  console.log("Example app listening on port 3000!");
});