import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";

// Create user in database
const signupUser = async (payload: User): Promise<Partial<User>> => {
  // Handle if user already exist
  const isExistUser = await prisma.user.findFirst({
    where: {
      email: payload.email,
    },
  });
  if (isExistUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User already exist');
  }
  // Hashing password
//   payload.password = await hashPasswordHelper.hashPassword(payload.password);
//   console.log(payload.password);

  const user = await prisma.user.create({
    data: payload,
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


// Login user
const loginUser = async (payload: User): Promise<string> => {
    // Handle if user already not exist
    const isUserExist = await prisma.user.findFirst({
      where: {
        email: payload.email,
      },
    });
    if (!isUserExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'User not exist');
    }
    // Compare password
    // const isPasswordMatch = await hashPasswordHelper.comparePassword(
    //   payload.password,
    //   isUserExist.password
    // );
    // if (!isPasswordMatch) {
    //   throw new ApiError(httpStatus.BAD_REQUEST, 'Password not match');
    // }
  
    // Return a success message (you can customize this message)
    return 'Login successful';
  };
  



  
export const authService = {
    signupUser,
    loginUser,
};
