import { Router } from "express";
import { getDistricts } from "../controllers/district.controller";

const districtRouter = Router();

districtRouter.get("/districts", getDistricts);

export { districtRouter };
