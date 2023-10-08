import express from 'express';
import { userController } from './user.controller';
import Auth from '../../middleware/auth';
import { ENUM_USER_ROLE } from '../../enums/user';


const router = express.Router();

router.get('/', Auth(ENUM_USER_ROLE.ADMIN), userController.getAllUsers);
router.get('/:id', Auth(ENUM_USER_ROLE.ADMIN), userController.getUserById);
router.patch('/:id', userController.updateUserById);
router.delete('/:id', Auth(ENUM_USER_ROLE.ADMIN), userController.deleteUserById);

export const userRoutes = router;