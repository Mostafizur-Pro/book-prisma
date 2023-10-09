import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { ReviewAndRating } from "@prisma/client";
// import { Review, User } from "@prisma/client";

const createReview = async (data: ReviewAndRating): Promise<ReviewAndRating> => {
  const { rating } = data;

  if (rating < 1 || rating > 5) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "rating must be between 1 and 5"
    );
  }

  const result = await prisma.reviewAndRating.create({
    data,
    include: {
      book: true,
    },
  });

  return result;
};

const getAllReview = async (): Promise<ReviewAndRating[]> => {
  const result = await prisma.reviewAndRating.findMany({
    include: {
      user: true,
      book: true,
    },
  });

  return result;
};

const getSingleReview = async (id: string) => {
  const result = await prisma.reviewAndRating.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
      book: true,
    },
  });

  return result;
};

const deleteReview = async (id: string): Promise<ReviewAndRating> => {
  const result = await prisma.reviewAndRating.delete({
    where: {
      id,
    },
    include: {
      user: true,
      book: true,
    },
  });

  return result;
};

const updateReview = async (
  id: string,
  data: Partial<ReviewAndRating>
): Promise<ReviewAndRating> => {
  const result = await prisma.reviewAndRating.update({
    where: {
      id,
    },
    data,
    include: {
      user: true,
      book: true,
    },
  });
  return result;
};

export const reviewService = {
  createReview,
  deleteReview,
  getAllReview,
  updateReview,
  getSingleReview,
};
