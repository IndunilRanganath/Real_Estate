import express from "express";
import { bookVisit, cancelBooking, createUser, getAllBookings, getAllFavResidencies, toFav} from "../controllers/userController.js";


const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/getAllBookings", getAllBookings);
router.post("/romveBooking/:id", cancelBooking);
router.post("/toFav/:rid", toFav);
router.post("/allFav", getAllFavResidencies);



export {router as userRoute}