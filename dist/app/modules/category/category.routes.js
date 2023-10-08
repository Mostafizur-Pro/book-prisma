"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const category_zod_validation_1 = require("./category.zod.validation");
const router = express_1.default.Router();
router.post('/create-category', (0, validateRequest_1.default)(category_zod_validation_1.CategoryValidation.zodValidation), category_controller_1.CategoryController.createCategory);
router.get('/', category_controller_1.CategoryController.getAllCategories);
router.get('/:id', category_controller_1.CategoryController.getCategoryById);
router.patch('/:id', (0, validateRequest_1.default)(category_zod_validation_1.CategoryValidation.zodValidation), category_controller_1.CategoryController.updateCategoryById);
router.delete('/:id', (0, validateRequest_1.default)(category_zod_validation_1.CategoryValidation.zodValidation), category_controller_1.CategoryController.deleteCategoryById);
exports.categoryRoutes = router;
//# sourceMappingURL=category.routes.js.map