import express from "express";
import { connectToDB } from "./db";
const app = express();
const port = process.env.PORT || "3000";

app.listen(port, async () => {
  try {
    await connectToDB();
  } catch (e) {
    console.log("Error Connecting to Database", e);
  }

  console.log(`app is listening on http://localhost:${port}`);
});
