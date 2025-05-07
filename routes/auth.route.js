import express from "express";
import {
    register,
    login,
    logout,
    refreshToken,
    test
} from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/refresh-token").get(refreshToken);
router.route("/test").get(test);

export default router;
