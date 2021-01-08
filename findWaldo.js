//callback function
const finWaldo = function(names, found){
    for ( let i=0; i<names.length; i++){
       //let name =names[i];
        if (names[i] === "Waldo"){
            found(i); //execute call back
        }
    }
};

const actionWhenFound =function(i){
    console.log("Found Waldo at index " + i + "!");
}

finWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);