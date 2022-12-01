import { body } from "express-validator";

export const messageValidation = [
    body("from", "min 1 symbol").isLength({ min: 1 }),
    body("to", "min 1 symbol").isLength({ min: 1 }),
    body("theme", "min 1 symbol").isLength({ min: 1 }),
    body("text", "min 1 symbol").isLength({ min: 1 }),
];
