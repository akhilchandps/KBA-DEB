import express,{json} from 'express';
import { issueCertificate } from './Router/userRouter.js';
import { AdminRoute } from './Router/AdminRouter.js';

const app= express()
 app.use(json())
 
 app.use('/',AdminRoute)

app.use('/',issueCertificate)
 const port=6000;

app.listen(port,(req,res)=>{
    console.log("server running on port",port);
    
})

