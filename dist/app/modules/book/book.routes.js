"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const book_zod_validation_1 = require("./book.zod.validation");
const router = express_1.default.Router();
router.get('/', book_controller_1.BookController.getAllBooks);
router.get('/:id', book_controller_1.BookController.getBookByCategoryId);
router.get('/:id', book_controller_1.BookController.getBookById);
router.post("/create-book", (0, validateRequest_1.default)(book_zod_validation_1.BookValidation.postValidation), book_controller_1.BookController.createBook);
router.patch("/:id", (0, validateRequest_1.default)(book_zod_validation_1.BookValidation.postValidation), book_controller_1.BookController.updateBookById);
router.delete("/:id", book_controller_1.BookController.deleteBookById);
exports.bookRoutes = router;
//# sourceMappingURL=book.routes.js.map