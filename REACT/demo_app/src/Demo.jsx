import React from 'react'


const Demo = () => {

  const name ="akhil"
  const x=50;
  const y=70;
  const names=["akhil","vinu","gishnu"]
  const loggedIn=false
  return (
    <>
    <div className='text-5xl text-center text-slate-600 font-bold'>
      MY NAME IS AKHIL CHAND P.S
    </div>
    <p className='text-5xl text-center text-slate-600 font-bold'>Hello {name}</p>
    <p>The sum of {x} and {y} is {x+y}</p>
    
  
    <ul>
      {
      names.map((nm,index)=>(
        <li key={index}>{nm}</li>
      ))
}
    </ul>
    {
      loggedIn? <h1>Hello Member</h1>:<h1>hello Guest</h1>
    }
    
    </>
  )
}

export default Demo
