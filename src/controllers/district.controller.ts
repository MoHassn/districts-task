import { Request, Response } from "express";
import { District } from "../models/district.model";

const getDistricts = async (req: Request, res: Response) => {
  try {
    const districts = await District.find({});

    return res.send({ districts });
  } catch (e) {
    console.log("Error occurred when getting districts", e);
    return res
      .status(500)
      .send({ message: "Error occurred when getting districts" });
  }
};

export { getDistricts };
