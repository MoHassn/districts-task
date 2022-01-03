import { Request, Response } from "express";
import { Order } from "../models/orders.model";

const addOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { type } = req.body;

  if (!type) {
    return res.status(400).send({ message: "Body is Required" });
  }

  try {
    const order = await Order.create({
      type,
      district: id,
    });
    return res.send({ order });
  } catch (e) {
    console.log("Error occurred while adding order", e);
    return res
      .status(500)
      .send({ message: "Error occurred while adding order" });
  }
};

export { addOrder };
