"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.get('/', book_controller_1.BookController.getAllBooks);
router.get('/:id', book_controller_1.BookController.getBookByCategoryId);
router.get('/:id', book_controller_1.BookController.getBookById);
router.post("/create-book", 
// ValidateRequest( BookValidation.postValidation ),
book_controller_1.BookController.createBook);
router.patch("/:id", 
// ValidateRequest( BookValidation.updateValidation ),
book_controller_1.BookController.updateBookById);
router.delete("/:id", book_controller_1.BookController.deleteBookById);
exports.bookRoutes = router;
//# sourceMappingURL=book.routes.js.map