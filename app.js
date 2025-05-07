import cookieParser from "cookie-parser";
import express, { urlencoded } from "express";
import authRouter from "./routes/auth.route.js";
import notesRouter from "./routes/notes.route.js";

const app = express();
app.use(express.json({ limit: "16kb" }));
app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));


app.use("/api/v1", authRouter);
app.use("/api/v1", notesRouter);

export default app;