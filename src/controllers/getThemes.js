import Message from "../models/Message.js";

export const getThemes = async (req, res) => {
  const data = await Message.distinct("theme");
  if (data.length > 0) {
    res.status(200).json(data);
  } else {
    res.status(200).json([]);
  }
};
