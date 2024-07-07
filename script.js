// Using for Loop for iteration//

let array = [1,4,56,7,8,90,54,4,54,-1,4,5];

for(let i = 0 ; i < array.length ; i++){
    console.log("The num at index", i, "is" ,array[i]);
}

// creating variables//

let high = array[0];
let low = array[0];


for(let i = 0 ; i < array.length ; i++){
    
  //compare with high values//
  if(array[i] > high){
      high = array[i];
    }
    
    //compare with low values//
    if(array[i] < low){
        low = array[i];
    }
}

console.log("The lowest value in array is ", low);
console.log("The highest value in array is ", high);