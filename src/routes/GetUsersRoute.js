import { Router } from "express";
import { getUsers } from "../controllers/getUsers.js";
import { checkMeAuth } from "../utils/checkMeAuth.js";
import { getUsersValidation } from "../validation/getUsersValidation.js";

const GetUsersRoute = new Router();

GetUsersRoute.get("/users", getUsersValidation, checkMeAuth, getUsers);
// GetUsersRoute.get("/users", checkMeAuth, getUsers);

export default GetUsersRoute;
