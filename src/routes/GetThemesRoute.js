import { Router } from "express";
import { getThemes } from "../controllers/getThemes.js";

const GetThemesRoute = new Router();

GetThemesRoute.get("/getThemes", getThemes);

export default GetThemesRoute;
