import express from 'express';

import { OrderController } from './order.controller';

const router = express.Router();

router.get('/', OrderController.getAllOrders);
router.get('/:id', OrderController.getOrderById);
router.post(
  '/create-order',

  OrderController.createOrder
);

export const orderRoutes = router;