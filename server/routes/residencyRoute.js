import express from "express";
import { createResidency, getAllResidencies, getResidencyById} from "../controllers/residencyController.js";


const router = express.Router();

router.post("/create", createResidency);
router.get("/allrecd", getAllResidencies);
router.get("/:id", getResidencyById)


 
export {router as residencyRoute}