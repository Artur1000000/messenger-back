import { Router } from "express";
import { getMessages } from "../controllers/getMessages.js";
import { getUsersValidation } from "../validation/getUsersValidation.js";

const GetMessageRoute = new Router();

GetMessageRoute.get("/getMessages", getUsersValidation, getMessages);

export default GetMessageRoute;
