import express from "express";
import { connectToDB } from "./db";

import { districtRouter } from "./routes/district.route";
import { orderRouter } from "./routes/order.route";

const app = express();
const port = process.env.PORT || "3000";

app.use(express.json());

// using routes
app.use("/", districtRouter);
app.use("/", orderRouter);

app.listen(port, async () => {
  try {
    await connectToDB();
  } catch (e) {
    console.log("Error Connecting to Database", e);
  }

  console.log(`app is listening on http://localhost:${port}`);
});

export default app;
