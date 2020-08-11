let arr = [-4, 3, -9, 0, 4, 1]

// 2 negative numbers
// 3 positive numbers
// 1 zero

const propotion = (arr) =>{
    let plusP = 0;
    let negativeProportion =0;
    let zeroProportion = 0;
    let arrayLength = arr.length;

    for (let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            plusP++
        }
        else if (arr[i] < 0){
            negativeProportion++
        }else{
            zeroProportion++
        }
    }
    console.log((plusP / arrayLength).toFixed(6))
    console.log((negativeProportion / arrayLength).toFixed(6))
    console.log((zeroProportion / arrayLength).toFixed(6))
}

console.log(propotion(arr))

