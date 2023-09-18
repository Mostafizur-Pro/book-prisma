
import express from 'express';
import { BookController } from './book.controller';


const router = express.Router();
router.get('/', BookController.getAllBooks);
router.get('/:id', BookController.getBookByCategoryId);
router.get('/:id', BookController.getBookById);
router.post("/create-book", BookController.createBook);
router.patch("/:id", BookController.updateBookById);
router.delete("/:id", BookController.deleteBookById);

export const bookRoutes = router;
