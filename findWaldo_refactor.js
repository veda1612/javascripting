const findWaldo = function(names, found){
    names.forEach(function(item,index, _array){
        if(item === "Waldo"){
            found(index); //executing call back
        }
    });

}

const actionWhenFound =function(i){
    console.log("Found Waldo at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);