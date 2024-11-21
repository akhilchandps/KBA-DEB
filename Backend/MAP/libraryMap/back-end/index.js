import express,{json} from 'express';
import dotenv from "dotenv";
import { adminRouter } from './Router/adminRouter.js';
import { userRoute } from './Router/UserRoute.js';
import cors from 'cors';
dotenv.config();

const app = express();

app.use(json());
app.use(cors({
    origin:"http://127.0.0.1:5500",
    credentials:true
}))
app.use("/",adminRouter)
app.use("/",userRoute)

const PORT = process.env.port

app.listen(PORT,()=>{
    console.log("server runing on PORT",PORT);
    
})








