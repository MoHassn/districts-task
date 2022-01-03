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

const findNearestDistricts = async (req: Request, res: Response) => {
  const location = req.body.location as number[];

  try {
    // TO BE DISCUSSED

    // const nearDistricts = District.aggregate()
    //   .near({
    //     near: [location[0], location[1]],
    //     distanceField: "dist.calculated",
    //     includeLocs: "dist.location",
    //   })
    //   .exec();

    const nearDistricts = await District.aggregate([
      {
        $geoNear: {
          near: { type: "Point", coordinates: [location[0], location[1]] },
          spherical: true,
          distanceField: "calcDistance",
        },
      },
      {
        $project: {
          name: 1,
          calcDistance: 1,
          location: {
            longitude: { $arrayElemAt: ["$location.coordinates", 0] },
            latitude: { $arrayElemAt: ["$location.coordinates", 1] },
          },
        },
      },
    ]);

    return res.send({ nearDistricts });
  } catch (e) {
    console.log("Error occurred while getting the near districts", e);
    return res
      .status(500)
      .send({ message: "Error occurred while getting the near districts" });
  }
};

export { getDistricts, findNearestDistricts };
