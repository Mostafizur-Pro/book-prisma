import { Category } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createCategory = async (payload: Category): Promise<Category> => {
    const isExist = await prisma.category.findFirst({
      where: {
        title: payload.title,
      },
    });
    if (isExist) {
      throw new Error('Category already exists');
    }
    const category = await prisma.category.create({
      data: payload,
    });
    return category;
  };


  export const CategoryService = {
     createCategory,
 
};
