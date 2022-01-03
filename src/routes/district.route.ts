import { Router } from "express";
import {
  findNearestDistricts,
  getDistricts,
} from "../controllers/district.controller";

const districtRouter = Router();

districtRouter.get("/districts", getDistricts);
districtRouter.get("/districts/near", findNearestDistricts);

export { districtRouter };
