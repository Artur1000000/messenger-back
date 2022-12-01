import { validationResult } from "express-validator";
import User from "../models/User.js";

export const auth = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const user = await User.findOne({ userName: req.body.userName });
    if (user) {
      return res.status(200).json({ id: user._id, userName: user.userName });
    }

    const doc = new User({
      userName: req.body.userName,
    });

    await doc.save();

    return res.status(200).json({ id: doc._id, userName: doc.userName });
  } catch (error) {
    res.status(500).json({ message: "failed to register" });
  }
};
