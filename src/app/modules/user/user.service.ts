import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";

// Get all users service
const getAllUsers =async (): Promise<Partial<User>[]> => {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        contactNo: true,
        address: true,
        profileImg: true,
      },
    });
  //   handle [] for users data
    if (!users) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Users not found');
    }
    return users;
  };

  
// Get user by id service
const getUserById = async (userId: string): Promise<Partial<User> | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
    },
  });
  return user;
};

  export const userService = {
    getAllUsers,
    getUserById

};

  