import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

 dotenv.config();
const secretKey=process.env.secretKey

const AuthToken=async(req,res,next)=>{

  const cookies=req.headers.cookie;
  const cookie=cookies.split(';');
  for(let tokens of cookie ){

    const [name,token] =tokens.trim().split("=");
    if(name=="authToken"){

      const verfiy = jwt.verify(token,secretKey)
      console.log(verfiy);
      console.log(verfiy.username);
      console.log(verfiy.role);
      
      next();
    }
    
  }
}

export {AuthToken}




// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';
// dotenv.config();
// const secretKey ="akhil"

// const authenticate=(req,res,next)=>{
//    const cookies= req.headers.cookie;

//    const cookie=cookies.split(';')

//    for(let cooki of cookie){ 

//     const [name,token]= cooki.trim().split('=')
//     if(name=="authtoken"){
//     const verified=  jwt.verify(token,secretKey)
//       console.log(verified);
//       console.log(verified.username);

//       req.Username=verified.username
//       req.UserRole=verified.role;
      
      
//       break;
//     }
//    }
   
//    console.log(cookies);
//    next();
   
// }

// export{authenticate}