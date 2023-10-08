import express from 'express';
import { CategoryController } from './category.controller';
import ValidateRequest from '../../middleware/validateRequest';
import { CategoryValidation } from './category.zod.validation';

const router = express.Router();
router.post(
    '/create-category',
    ValidateRequest(CategoryValidation.zodValidation),
     CategoryController.createCategory);
router.get('/', CategoryController.getAllCategories);
router.get('/:id', CategoryController.getCategoryById);


router.patch(
    '/:id',
    ValidateRequest(CategoryValidation.zodValidation),
    CategoryController.updateCategoryById
);
router.delete(
    '/:id',
        CategoryController.deleteCategoryById
);

export const categoryRoutes = router;