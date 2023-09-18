
import express from 'express';
import { BookController } from './book.controller';
import ValidateRequest from '../../middleware/validateRequest';
import { BookValidation } from './book.zod.validation';


const router = express.Router();
router.get('/', BookController.getAllBooks);
router.get('/:id', BookController.getBookByCategoryId);
router.get('/:id', BookController.getBookById);
router.post("/create-book", 
ValidateRequest( BookValidation.postValidation ),
BookController.createBook);
router.patch("/:id", 
ValidateRequest( BookValidation.postValidation ),
BookController.updateBookById);
router.delete("/:id", BookController.deleteBookById);

export const bookRoutes = router;
