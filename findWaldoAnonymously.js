//callback function
const findWaldo = function(names, found){
    names.forEach(function(item,index, _array){
        if(item === "Waldo"){
            found(index); //executing call back
        }
    });

}

//const actionWhenFound =function(i){
    //console.log("Found Waldo at index " + i + "!");
//}

//finWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
    console.log("Waldo is located at:", index);
  });