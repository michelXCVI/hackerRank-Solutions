let a = [1, 2, 3];

let b = [3, 2, 1];

const arrayComparator = (a, b) =>{

    let aPoints = 0;
    let bPoints= 0;

    for (let i = 0; i < a.length; i++){
        if (a[i]> b[i]){
            aPoints ++;
        } else if (a[i] < b[i]){
            bPoints ++;
        }
    } 
        return [aPoints, bPoints]
}

console.log(arrayComparator(a, b))