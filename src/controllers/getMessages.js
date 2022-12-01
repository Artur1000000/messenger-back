import Message from "../models/Message.js";

export const getMessages = async (req, res) => {
  const data = await Message.find({
    $or: [{ from: req.query.userName }, { to: req.query.userName }],
  }).exec();
  const themes = await Message.distinct("theme");
  if (data.length > 0) {
    res.status(200).json({messages:data, themes});
  } else {
    res.status(200).json({messages:[], themes:[]});
  }
};
