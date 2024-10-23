import { json } from 'express';
import express  from 'express';
import { addBook } from './Router/AddBookRoute.js';
import { adminRoute } from './Router/AdminRoute.js';

const app= express();

const port=4000;
app.use(json())
app.use('/',addBook)
app.use('/',adminRoute)

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
    
})