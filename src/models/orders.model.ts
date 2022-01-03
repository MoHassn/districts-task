import { Schema, Model, Document, model } from "mongoose";
import { orderType } from "./enums";

type OrderInput = {
  type: "PRO" | "BASIC";
};

type OrderDocument = Document & {
  type: OrderInput["type"];
  district: string;
};

const orderSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: orderType,
  },
  district: {
    type: Schema.Types.ObjectId,
    ref: "District",
  },
});

const Order: Model<OrderDocument> = model("Order", orderSchema);

export { Order };
