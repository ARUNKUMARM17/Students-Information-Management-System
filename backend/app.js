import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import ConnectDb from "./src/config/db.js";
import userRouter from "./src/routes/user.routes.js";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import ejs from "ejs";
dotenv.config();
ConnectDb();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"src/views"));

// app.get("/view",(req,res)=>{
//     res.render("index",{userName:"John Doe"});
// })


app.use("/api/users",userRouter);

export default app;