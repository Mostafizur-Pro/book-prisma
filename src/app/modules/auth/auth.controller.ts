import httpStatus from "http-status";
import { authService } from "./auth.service";
import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";


const signupUser = catchAsync(async (req: Request, res: Response) => {
    const payload = req.body;
    const user = await authService.signupUser(payload);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "User created successfully",
        data: user,
    });
});


const loginUser = catchAsync(async (req: Request, res: Response) => {
    const result = await authService.loginUser(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User logged in successfully",
        data: result
    });
});


export const authController = {
    signupUser,
    loginUser,
};
