import express from 'express';
import { authController } from './auth.controller';
import ValidateRequest from '../../middleware/validateRequest';
import { authValidation } from './auth.zod.validation';


const router = express.Router();

router.post('/signup',
ValidateRequest(authValidation.signupValidation),
authController.signupUser);

router.post('/signin',
ValidateRequest(authValidation.signupValidation),
authController.loginUser);


export const authRoutes = router;
