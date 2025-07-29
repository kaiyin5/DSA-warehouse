// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND
function isEven(num) {
    return (num & 1) == 0
}

function reverseBits(n) {
    let ans = 0;
    for (let i = 1; i <= 32; i++) {
        ans <<= 1;
        ans += (n & 1);
        n = n >> 1;
    }
    return ans
};
console.log(reverseBits(43261596));