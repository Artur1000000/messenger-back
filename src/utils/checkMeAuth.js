import { validationResult } from "express-validator";
import User from "../models/User.js";

export const checkMeAuth = async (req, res, next) => {
  try {
    const errors = validationResult(req.query);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const result = await User.findOne({ _id: req.query.id });
    if (!result) {
      return res.status(400).json({ message: "failed" });
    }
    next();
  } catch (error) {
    return res.status(400).json({ message: "failed" });
  }
};
