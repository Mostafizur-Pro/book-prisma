import express from 'express';
import { authRoutes } from '../modules/auth/auth.routes';
import { userRoutes } from '../modules/user/user.routes';
import { profileRoutes } from '../modules/profile/profile.routes';
import { categoryRoutes } from '../modules/category/category.routes';
import { bookRoutes } from '../modules/book/book.routes';
import { orderRoutes } from '../modules/order/order.routes';
import { reviewsRoutes } from '../modules/review/review.route';
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
      routes: userRoutes,
    },
    // {
    //   path: '/profile',
    //   routes: profileRoutes,
    // },
    {
      path: '/categories',
      routes: categoryRoutes,
    },
    {
      path: '/books',
      routes: bookRoutes,
    },
    {
      path: '/orders',
      routes: orderRoutes,
    },
    {
      path: '/review',
      routes: reviewsRoutes,
    },
    

]

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;