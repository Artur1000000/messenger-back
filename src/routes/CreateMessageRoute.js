import { Router } from "express";
import { createMessage } from "../controllers/createMessage.js";
import { messageValidation } from "../validation/messageValidation.js";

const CreateMessageRoute = new Router();

CreateMessageRoute.post("/create", messageValidation, createMessage);

export default CreateMessageRoute;
