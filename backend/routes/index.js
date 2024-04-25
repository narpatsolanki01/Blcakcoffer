import express from "express";
const router = express.Router();
import { get_data } from "../Conttroller/DataController.js";

router.get("/get_data", get_data);

export default router;