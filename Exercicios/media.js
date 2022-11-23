(function(){
function media(){
    console.log(arguments);
    let total = 0;
    for (let i = 0; i <arguments.length; i++){
        if(typeof arguments[i]!=="number"){
            throw Error ("Only numbers");
        }
        total+= arguments[i];
    }
    return (total/arguments.length) || 0;
    
}

console.log( media());
})()

