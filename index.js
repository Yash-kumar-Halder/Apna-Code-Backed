import app from "./app.js";
import { connectDb } from "./db/connectDb.js";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config({
    path: ".env",
});

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);


connectDb()
.then(() => {
    app.listen(3000, () => {
        console.log(`Server is running on port: ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.log(`Error starting server: ${error.message}`);
    process.exit(1);
    
})