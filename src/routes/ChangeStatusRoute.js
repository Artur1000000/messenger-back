import { Router } from "express";
import { changeStatus } from "../controllers/changeStatus.js";

const ChangeStatusRoute = new Router();

ChangeStatusRoute.patch(
  "/changeStatus",
  changeStatus
  //   checkMeAuth,
  //   lookStatusUser,
  //   blockUsers,
  //   getUsers
);
export default ChangeStatusRoute;
