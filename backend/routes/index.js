import express from "express";
 
import { 
    getAllCars,
    getCarById,
    getCarsByType
} from "../controllers/Cars.js";
 
const router = express.Router();
 
router.get('/', getAllCars);
router.get('/:id', getCarById);
router.get('/tipo/:tipo', getCarsByType)

 
export default router;