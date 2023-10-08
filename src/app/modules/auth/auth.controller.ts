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
    const payload = req.body;
    const user = await authService.loginUser(payload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User logged in successfully",
        token: user.token,
    });
});


export const authController = {
    signupUser,
    loginUser,
};
