import express ,{json} from 'express';

const app=express();
 app.use(json())
const port=8000;

app.listen(port,()=>{
    console.log("server running",port);  
})

app.get('/',(req,res)=>{
    res.send("helo world")
})

app.post('/signups', (req, res) => {
  const { username, email, password } = req.body;
  
  if (email) {
      return res.status(400).json("Email Already Exists");
  } else {
      const newData = { username, email, password };
      return res.status(200).json("Registration Successful");
  }
});

