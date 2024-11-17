import React from 'react'

const AddStudent = () => {
  return (
    <>
        <div class="row md:flex md:justify-around align-center">
            
        <div className="col">
       <Dashboard/>
        </div>

        <div class="col flex justify-center bg-[url('./image/5040007.jpg')] w-full bg-cover" >
    <form class="md:w-[700px] w-[370px]  bg-[rgba(0,120,205,0.5)] p-5 m-10 h-[430px] md:h-[500px]">
        <h1 class="text-3xl text-white font-bold my-6">Fill the Student Info</h1>
        
        <div class="flex justify-between my-5">
            <label for="" class="text-white">Full Name</label>
            <div>
                <input type="text" placeholder="Enter Full Name" required class="md:w-[500px] w-[250px]  h-8 rounded-md pl-3"/>
            </div>
        </div>
        <div class="flex justify-between my-5">
            <label for="" class="text-white">Roll id</label>
            <div>
                <input type="number" placeholder="Enter Roll Id" required class="md:w-[500px]  w-[250px]   h-8 rounded-md pl-3"/>

            </div>
        </div>
        <div class="flex justify-between my-5 text-white">
            <label for="">Gender</label>
            <div class="md:w-[500px] w-[200px]"> 
                <input type="radio" required/>
                <label for="">Male</label>
                <input type="radio" required/>
                <label for="">Female</label>
            </div>
           
        </div>

        <div class="flex justify-between my-5">
            <label for="" class="text-white">Class</label>
            <select name="" id="" class="md:w-[500px] w-[250px] h-8">
                <option value="" selected>Select class</option>
                <option value="">First section A</option>
                <option value="">First section C</option>
                <option value="">Tenth section A</option>
                <option value="">Tenth section B</option>
                <option value="">sixth section B</option>
                <option value="">sixth section A</option>
            </select>
        </div>

        <div class="flex justify-between my-5">
            <label for="" class="text-white">DOB</label>
            <input type="date" class="md:w-[500px] w-[250px]" required/>
        </div>

        <div  class="text-center">
            <button class="w-14 h-8 bg-green-600 text-white" type="submit">Add</button>
        </div>
    </form>
   </div>

        </div>

    </>
  )
}

export default AddStudent
