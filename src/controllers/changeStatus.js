import Message from "../models/Message.js";

export const changeStatus = async (req, res) => {
    await Message.updateMany({ _id: req.body.ids }, { status: true });
    res.json({Message:true})
  };
  