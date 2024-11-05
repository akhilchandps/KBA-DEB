import express,{json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { adminRouter } from './Router/adminRouter.js';

dotenv.config();

const app= express();
app.use(json());
app.use(cors());
app.use('/',adminRouter)
const PORT=process.env.port

app.listen(PORT,()=>{
    
    console.log("server listening on port ",PORT);
    
})


