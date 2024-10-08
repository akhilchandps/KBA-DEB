try{
    //code that might throw an error

    let result =riskOperation();
    console.log(result);
    
}
catch(error){

    //code to handle error
    console.log("An error Occured: ",error.message);
    
}finally {
    //code thst runs regardles of an error
    console.log("This will always run");
    
}

function riskOperation(){
    let obj;
    obj.property; //This will throws an error
}