"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewsRoutes = void 0;
const express_1 = __importDefault(require("express"));
// import auth from "../../middlewares/auth";
// import { ENUM_USER_ROLE } from "../user/user.constants";
const review_controller_1 = require("./review.controller");
const router = express_1.default.Router();
router.get('/', review_controller_1.reviewController.getAllReview);
router.get('/:id', review_controller_1.reviewController.getSingleReviews);
router.post('/create-review', review_controller_1.reviewController.createReview);
router.patch('/:id', review_controller_1.reviewController.updateReview);
router.delete('/:id', review_controller_1.reviewController.deleteReview);
exports.reviewsRoutes = router;
//# sourceMappingURL=review.route.js.map