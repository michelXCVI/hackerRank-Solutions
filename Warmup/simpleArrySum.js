let arr = [1, 2, 3, 4, 5] // arr = 3


const arrayCounter = (arr) => {
   // loop through the arr element

    let sum =0; 
    for(let i=0; i<arr.length; i++){
        //console.log(arr[i])
        sum+= arr[i];
    } 
    return sum 
}

console.log(arrayCounter(arr))