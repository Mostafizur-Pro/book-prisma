import express from "express";
// import auth from "../../middlewares/auth";
// import { ENUM_USER_ROLE } from "../user/user.constants";
import { reviewController } from "./review.controller";

const router = express.Router();

router.get('/', reviewController.getAllReview);
router.get('/:id', reviewController.getSingleReviews);
router.post('/create-review', reviewController.createReview);
router.patch('/:id', reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);


export const reviewsRoutes = router;
