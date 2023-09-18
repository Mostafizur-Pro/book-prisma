import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";
import { Request, Response } from "express";
import { OrderService } from "./order.service";
import ApiError from "../../../errors/ApiError";

const getAllOrders = catchAsync(async (req: Request, res: Response) => {
    const token = req.headers.authorization;
    const result = await OrderService.getAllOrders( token as string);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        message: "Orders fetched successfully",
        success: true,
        data: result,
    })
});

const getOrderById = catchAsync(async (req: Request, res: Response) => {
    const token = req.headers.authorization;
    const payload = req.params.id
    const result = await OrderService.getOrderById( token as string, payload);
    if (!result) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Order not found");
    }
    sendResponse(res,{
        statusCode: httpStatus.OK,
        message: "Orders fetched successfully",
        success: true,
        data: result,
    })
});

const createOrder = catchAsync(async (req: Request, res: Response) => {
    const token = req.headers.authorization;
    const payload = req.body
    const result = await OrderService.createOrder(token as string, payload);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        message: "Order created successfully",
        success: true,
        data: result,
    })
});

export const OrderController = {
    getAllOrders,
    getOrderById,
    createOrder,
};
