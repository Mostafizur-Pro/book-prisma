import express from 'express';
import { authRoutes } from '../modules/auth/auth.routes';
import { userRoutes } from '../modules/user/user.routes';
import { profileRoutes } from '../modules/profile/profile.routes';
const router = express.Router();



const moduleRoutes = [
    {
      path: '/auth',
      routes: authRoutes,
    },
    {
      path: '/users',
      routes: userRoutes,
    },
    {
      path: '/profile',
      routes: profileRoutes,
    },

]

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;