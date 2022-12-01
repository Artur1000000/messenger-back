import { query } from "express-validator";

export const getUsersValidation = [
  query("userName", "min 1 symbol").isLength({ min: 1 }),
  query("id", "min 1 symbol").isLength({ min: 1 }),
];
