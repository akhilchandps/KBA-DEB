import express,{json} from 'express';
import cors from 'cors';
import { authRouter } from './Router/adminRouter.js';

const app = express();

app.use(json());
app.use(cors({
    credentials:true
}))
app.use("/",authRouter)

const PORT = 5000;

app.listen(PORT,async(req,res)=>{
    console.log("server running on",PORT);
    
})