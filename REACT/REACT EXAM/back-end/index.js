const express=require("express");
const  mongoose =require("mongoose");
const cors =require("cors");
const router = require("./Router/adminRoute");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const userRoute = require("./Router/userAdd");

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:3000", 
  credentials: true, 
}))
app.use(express.json());
app.use(cookieParser());




app.use("/",router)
app.use("/",userRoute)

const PORT = 5000

app.listen(PORT,()=>{
    console.log("Server running on PORT",PORT);   
})
mongoose.connect("mongodb://localhost:27017/Hotel-Management")

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});