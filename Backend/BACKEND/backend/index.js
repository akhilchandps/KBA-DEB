import express ,{json}from 'express';
import { adminRouter } from './Routes/adminRoute.js';
import { addCourse } from './Routes/addCourseRoute.js';
import cors from 'cors';

const app= express();
app.use(json())
const port=process.env.PORT
app.use(cors({
    origin:"*"
}))
app.use('/',adminRouter)
app.use('/',addCourse)

app.listen(port,()=>{
    console.log(`Server listening in the port ${port}`);
    
})


