import { validationResult } from "express-validator";
import Message from "../models/Message.js";

export const createMessage = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const doc = new Message({
      from: req.body.from,
      to: req.body.to,
      theme: req.body.theme,
      text: req.body.text,
    });

    await doc.save();

    return res.status(200).json({ message: true });
  } catch (error) {
    res.status(500).json({ message: "failed create message" });
  }
};
