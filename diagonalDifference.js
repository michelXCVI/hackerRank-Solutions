let arr = [[1,2,3],
[4, 5, 6],
[9, 8, 9]]

// diagonal left is 1, 5, 9 => [0][0], [1][1], [2][2]
// diagonal right is 3, 5, 9 => [0][2], [1][1], [2][0]


const diagonalDifference = (arr) =>{
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    //let differenceOfDiagonals = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == j){
                leftDiagonal += arr[i][j]
                //console.log("arr j", arr[i][j]) 
            }
            if(i + j === arr.length - 1){
                rightDiagonal += arr[i][j]
                //console.log("i" , i, "j", j, "blah", arr[i][j])
            }
            
        }


}
            return Math.abs(leftDiagonal - rightDiagonal)
}

console.log(diagonalDifference(arr))