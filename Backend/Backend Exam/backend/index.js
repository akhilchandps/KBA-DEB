import express,{json} from "express";
import dotenv from "dotenv";
import { userRouter } from "./Router/UserRouter.js";

dotenv.config();
const app = express();
app.use(json())
app.use("/",userRouter)
const PORT =  process.env.port

app.listen(PORT,()=>{
    console.log("Server listening on PORT",PORT);
    
})