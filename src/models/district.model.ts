import { Schema, Model, Document, model } from "mongoose";

type DistrictInput = {
  name: string;
  location: {
    type: "Point";
    coordinates: number[];
  };
};

type DistrictDocument = Document & {
  name: DistrictInput["name"];
  location: DistrictInput["location"];
};

const districtSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: "Point",
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

const District: Model<DistrictDocument> = model("District", districtSchema);

export { District };
