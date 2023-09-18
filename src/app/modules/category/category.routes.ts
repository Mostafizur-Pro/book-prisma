import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();
router.post(
    '/create-category', CategoryController.createCategory);
router.get('/', CategoryController.getAllCategories);
router.get('/:id', CategoryController.getCategoryById);


router.patch(
    '/:id',

    CategoryController.updateCategoryById
);
router.delete(
    '/:id',
    CategoryController.deleteCategoryById
);

export const categoryRoutes = router;