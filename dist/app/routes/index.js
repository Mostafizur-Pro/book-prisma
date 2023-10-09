"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("../modules/auth/auth.routes");
const user_routes_1 = require("../modules/user/user.routes");
const category_routes_1 = require("../modules/category/category.routes");
const book_routes_1 = require("../modules/book/book.routes");
const order_routes_1 = require("../modules/order/order.routes");
const review_route_1 = require("../modules/review/review.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        routes: auth_routes_1.authRoutes,
    },
    {
        path: '/users',
        routes: user_routes_1.userRoutes,
    },
    {
        path: '/profile',
        routes: user_routes_1.userRoutes,
    },
    // {
    //   path: '/profile',
    //   routes: profileRoutes,
    // },
    {
        path: '/categories',
        routes: category_routes_1.categoryRoutes,
    },
    {
        path: '/books',
        routes: book_routes_1.bookRoutes,
    },
    {
        path: '/orders',
        routes: order_routes_1.orderRoutes,
    },
    {
        path: '/review',
        routes: review_route_1.reviewsRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
//# sourceMappingURL=index.js.map