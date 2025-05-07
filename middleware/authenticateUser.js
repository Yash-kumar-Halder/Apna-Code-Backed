import jwt from "jsonwebtoken";
import {User} from "../models/userModel.js";

export const authenticateUser = async (req, res, next) => {
    const token = req.cookies.refreshToken;

    if (!token) {
        return res.status(401).json({ message: "No token found in cookie" });
    }

    try {
        const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        req.user = user; // user.id available now
        next();
    } catch (error) {
        return res
            .status(401)
            .json({ message: "Invalid or expired token", error });
    }
};
