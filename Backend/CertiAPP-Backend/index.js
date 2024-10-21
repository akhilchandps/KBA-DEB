import express,{json} from 'express';
import { issueCertificate } from './Router/userRouter.js';

const app= express()
 app.use(json())

 app.use('/',issueCertificate)
 const port=6000;

app.listen(port,(req,res)=>{
    console.log("server running on port",port);
    
})

