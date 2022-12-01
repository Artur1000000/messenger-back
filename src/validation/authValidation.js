import { body } from "express-validator";

export const authValidation = [
  body("userName", "min 1 symbol").isLength({ min: 1 }),
];
