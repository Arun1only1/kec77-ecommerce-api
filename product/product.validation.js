import Yup from "yup";
import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  productCategories,
} from "../constant/general.constant.js";

export const addProductValidationSchema = Yup.object({
  name: Yup.string().required().trim().max(55),
  brand: Yup.string().required().trim().max(55),
  price: Yup.number().required().moreThan(0),
  quantity: Yup.number().required().min(1),
  category: Yup.string().trim().required().oneOf(productCategories),
  freeShipping: Yup.boolean().default(false),
  description: Yup.string().required().trim().min(10).max(1000),
});

export const paginationDataValidationSchema = Yup.object({
  page: Yup.number().min(1).integer().default(DEFAULT_PAGE),
  limit: Yup.number().min(1).integer().default(DEFAULT_LIMIT),
  searchText: Yup.string().trim().optional(),
});
