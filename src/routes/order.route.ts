import { Router } from "express";
import { addOrder } from "../controllers/order.controller";

const orderRouter = Router();

orderRouter.post("/districts/:id/orders", addOrder);

export { orderRouter };
