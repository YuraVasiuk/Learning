var hi = [1,2,3].reduce(function(acc, val, i, fullarray){
    console.log('i',i)
    console.log("acc",acc)
    console.log('val',val)
    return acc + val;
}, 0)

console.log('hi', hi);


const mysteryOp = function(nums){
    function toSquares(x){
        return x * x;
    }

    function toSum(acc, c) {
        return acc + c
    }

    return nums
    .map(toSquares )
    .map(toHalf)
    .reduce(toSum, 0);
}