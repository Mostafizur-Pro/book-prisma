
import { Order, OrderedBook } from "@prisma/client";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import prisma from "../../../shared/prisma";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { TOrder } from "./orderedBook.interface";
import { AsyncForEach } from "../../../helpers/asyncForEach";

// Get: getOrders - get all orders for Admin and Customer who made the order 
const getAllOrders = async (token:string):Promise<Order[] | undefined> => {
    const decodedToken = jwtHelpers.verifyToken(
        token,
        'very-very-secret'
    );

    if (decodedToken.role === 'admin') {
      const result = await prisma.order.findMany({
        include: {
          orderedBooks: true,
        },
      });
      return result;
    }
    if (decodedToken.role === 'customer') {
      const result = await prisma.order.findMany({
        where: { userId: decodedToken.userId },
        include: {
          orderedBooks: true,
        },
      });

      return result;
    }
};

// Get: get order by id - get order by id for specific customer and admin
const getOrderById = async (token:string, orderId: string):Promise<Order | undefined> => {
    const isExist = await prisma.order.findFirst({
        where: {
            id: orderId,
        },
    });
    if (!isExist) {
        throw new ApiError(httpStatus.NOT_FOUND, "Order not found");
    }
    const decodedToken = await jwtHelpers.verifyToken(
        token,
        process.env.JWT_SECRET as string
    );
   if (decodedToken.role === 'admin') {
     const result = await prisma.order.findMany({
      include: {
        orderedBooks: true,
      },
     });
     return result as any;
   }
   if (decodedToken.role === 'customer') {
     const result = await prisma.order.findMany({ 
      where: { id:orderId, userId:decodedToken.userId },
      include: {
        orderedBooks: true,
      }, 
    });

     return result as any;
   }
};


// Post: createOrder - create an order for a user
const createOrder = async (token: string, payload: TOrder):Promise<Order> => {
  const decodedToken = jwtHelpers.verifyToken(
    token,
    'very-very-secret'
  );
  console.log('result', decodedToken)
  const { orderedBooks } = payload;
//   check if the user already has an order with same books in orderedBooks
    const userOrders = await prisma.order.findMany({
        where: {
            userId: decodedToken.userId,
        },
        include: {
            orderedBooks: true,
        },
    });
  
    const userOrderWithSameBooks = userOrders.find((order) => {
        const orderedBooksIds = order.orderedBooks.map((orderedBook) => orderedBook.bookId);
        const payloadBooksIds = orderedBooks.map((orderedBook) => orderedBook.bookId);
        return orderedBooksIds.every((bookId) => payloadBooksIds.includes(bookId));
    });
    if (userOrderWithSameBooks) {
        throw new ApiError(httpStatus.BAD_REQUEST, "You already have an order with same books");
    }
  const orderWithBooks = await prisma.$transaction(async transactionClient => {
    const order = await transactionClient.order.create({
      data: {
        userId: decodedToken.userId,
      },
      include: {
        orderedBooks: true,
      },
    });
    await AsyncForEach(orderedBooks, async (book: OrderedBook) => {
      await transactionClient.orderedBook.createMany({
        data: {
          orderId: order.id,
          bookId: book.bookId,
          quantity: +book.quantity,
        },
      });
    });

    return order;
  });
  return orderWithBooks;
};

export const OrderService = {
    getAllOrders,
    getOrderById,
    createOrder,
};
