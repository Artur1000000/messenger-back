import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      require: true,
    },
    to: {
      type: String,
      require: true,
    },
    theme: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    status: {
      type: Boolean,
      default:false
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);
export default mongoose.model("Message", MessageSchema);
