import React from 'react'
import Card from './Cards';
import Demo from './Demo';


const App = () => {

    <>
    <Demo/>
    <div className='{flex}'>
    <Card customClasses="bg-rose-400 my-3" />
      <Card customClasses="bg-green-400" />
      <Card customClasses="bg-slate-400 my-3" />
    </div>
    
    </>
  
}

export default App
