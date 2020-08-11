let arr = [1000000, 10000002, 1000003, 100004]

const bigArraySum = (arr) => {

    let sum = 0

    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

console.log(bigArraySum(arr))