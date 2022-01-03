require("dotenv").config();

import { connect } from "mongoose";

const dbURI = process.env.DB_URI as string;

const connectToDB = async () => {
  await connect(dbURI);
};

export { connectToDB };
