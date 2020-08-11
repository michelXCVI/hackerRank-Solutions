let arr = [1, 2, 3, 4, 5]


const miniMaxSum = (arr) =>{
    let sum = arr.reduce((acc, curr) => acc + curr);
    let min = sum - Math.max(...arr);
    let max = sum - Math.min(...arr);

    console.log(min, max);
}

console.log(miniMaxSum(arr))