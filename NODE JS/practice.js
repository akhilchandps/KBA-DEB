
const readline=require('readline');
rl=readline.Interface({
    input:process.stdin,
    output:process.stdout
});

const inventery = new Map();

function askCommand(){
    console.log("welcome to inventery system");
    console.log("please enetr the commands like add,remove update summary");
   rl.question("enter the command", function(command){
    switch(command.trim().toLowerCase()){
        case 'add':addTaskprompt();
        break;
        case 'remove':removeTaskPrompt();
        break;
        case 'search':searchTaskPrompt();
        break;
        case 'update':updateTaskPrompt();
        break;
        case 'summary':summaryTaskPrompt();
        askCommand();
        break;
        case 'exit':
            rl.close();
         default:
            console.log("invalid command enter valid command");
            break;            
    }
   })   
}

function addTaskprompt(){
    rl.question("enter item id:", function(id){
        rl.question("enter item name",function(name){
         rl.question("enter item category:",function(category){
            rl.question("eneter item quantity",function(quantity){
                addItem(id,name,category,parseInt(quantity))
                askCommand();
            })
         })
        })
    })
}


function addItem(id,name,category,quantity){
    if(inventery.has(id)){
        console.log("id alraedy exist");
    }
    else{
        inventery.set(id,{name,category,quantity})
        console.log(`item with ${id} item added to inventery`);
        
    }
}

function removeTaskPrompt(){
    rl.question("enter remove item id:",function(id){
        removeItem(id)
        askCommand()
    });
  
}

function removeItem(id){
  if(inventery.has(id)){
    inventery.delete(id)
    console.log(`item with ${id} is deleted`);
    
  }else{
    console.log("there is no item id");
    
  }

}

function searchTaskPrompt(){
    rl.question("enter search item:",function(searchTerm){
        searchItem(searchTerm)
        askCommand();
    })
}

function searchItem(searchTerm){
  const result =[];
  for(const [id, item] of inventery){
    if(id.includes(searchTerm) || item.name.includes(searchTerm)  || item.category.includes(searchTerm) || item.quantity.includes(searchTerm)){
      
    result.push({id,...item})
    console.log(`item is updated`);
    
    }
  }

  if(result.length >0){
    console.log(`result is`,result);
    
  }
  console.log("no item");
  
}

function updateTaskPrompt(){
    rl.question("enter item id:", function(id){
        rl.question("enter item name",function(newName){
         rl.question("enter item category:",function(newCategory){
            rl.question("eneter item quantity",function(newQuantity){
                updateItem(id,newName,newCategory,newQuantity? parseInt(newQuantity) : undefined)
                askCommand();
            })
         })
        })
    })
}

function updateItem(id,newName,newCategory,newQuantity){
    if(inventery.has(id)){
       let item= inventery.get(id)
       item.name = newName || item.name
       item.category = newCategory || item.category
       item.quantity = newQuantity!==undefined ? newQuantity : item.quantity
       inventery.set(id,item)
       console.log(`item with ${id} is updated`);
       
    }else{
        console.log("item id is not found");

    }
    
}

function summaryTaskPrompt(){
    console.log("summary");
    for(const [id,item] of inventery){
        console.log(`Name:${item.name} /n,Category:${item.category}/n,Quantity:${item.quantity}`); 
    }
    
}
askCommand();






