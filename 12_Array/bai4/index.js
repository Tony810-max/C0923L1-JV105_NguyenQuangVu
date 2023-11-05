let arr = [1,3,4,5,12,-123,-12]
let j = arr.length
let i;
let max =arr[0]
for (i=1; i < j; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}
console.log(max);