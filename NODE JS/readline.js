const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function askName(){
    rl.question("what is your name?",function(name){
        console.log(`Hello ${name}`);
        
        askFavoriteLanguage();
    })
}
function askFavoriteLanguage(){
    rl.question("what is your faviorite language?",function(language){
    })
}
//start prompt
console.log("welcome to simple interface using readline")
askName();