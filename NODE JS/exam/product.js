
const readline= require('readline')
let rl=readline.Interface({
    input:process.stdin,
    output:process.stdout
})
const product = new Map()

function askCommand(){
    console.log("Welcome to product management system");
    
    console.log("product manangement system");

    rl.question("Enter the command",function(command){
        switch(command.trim().toLowerCase()){
            case 'add':
            addTaskPrompt();
            break;
            case 'remove':
            removeTaskPrompt();
            break;
            case 'search':
            searchTaskPrompt();
            break;
            case 'update':
            updateTaskPrompt();
            break;
            case 'summary':
            printSummary();
            break;    

            default:
                console.log("Invalid command enter valid command");
                
        }
    })
    
}

function addTaskPrompt(){
    rl.question("Enter product ID",function(id){
        rl.question("Enter product name",function(productName){
            rl.question("Enter product quantity",function(quantity){
                rl.question("Enter customer name",function(customerName){
                    addItem(id,productName,parseInt(quantity),customerName)
                    askCommand();

                })
            })
        })
    })
}


function addItem(id,productName,quantity,customerName){
  if(product.has(id)){
    console.log("Product id Already exist");
    
  }else{
    product.set(id,{productName,quantity,customerName})
    console.log(`PRODUCT WITH ${id} is ADDED`);
    
  }
}


function removeTaskPrompt(){
    rl.question("Enter product id to remove",function(id){
        removeItem(id)
        askCommand();
    })
}

function removeItem(id){
    if(product.has(id)){
        product.delete(id)
        console.log(`PRODUCT WITH ${id} DELETED`);
        
    }else{
        console.log("NO ITEM ID");
        
    }
}

function searchTaskPrompt(){
    rl.question("Enter search item",function(searchTerm){
        searchItem(searchTerm)
        askCommand();
    })
}

function searchItem(searchTerm){
   let result=[];
   for(const [id,products] of product){
     if(id.includes(searchTerm)||products.productName.includes(searchTerm)||products.quantity.includes(searchTerm)||products.customerName.includes(searchTerm)){

        result.push({id,...products})
     }
   }
   if(result.length>0){
    console.log("Search Results",result);
    
   }else{
    console.log("NO ITEMS FOUND");
    
   }

}

function updateTaskPrompt(){
    rl.question("Enter product ID",function(id){
        rl.question("Enter product name",function(newproductName){
            rl.question("Enter product quantity",function(newquantity){
                rl.question("Enter customer name",function(newcustomerName){
                    updateItem(id,newproductName,newquantity?newquantity:undefined,newcustomerName)
                    askCommand();

                })
            })
        })
    })
}
askCommand();


function updateItem(id,newproductName,newquantity,newcustomerName){
if(product.has(id)){
   const item=product.get(id);
   item.productName= newproductName || item.productName
   item.quantity = newquantity || item.quantity
   item.customerName = newcustomerName || item.customerName
   product.set(id,item)
   console.log(`product with ${id} updated`);
   
}else{
    console.log("Np product id");
    
}
}