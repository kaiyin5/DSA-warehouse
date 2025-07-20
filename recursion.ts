
// linear recursion
// Time: O(2ⁿ)
function fibonacci(n: number): number {
    // base case
    if (n <= 1) {
        return 0;
    }
    if (n == 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// divide and conquer
// Time: O(log(n))
function binarySearch(target: number, arr: number[], start: number = 0, end: number = arr.length): number {
    // base case
    if (start > end) {
        return -1;
    }
    let mid: number = ~~(start + (end - start) / 2);
    if (target == arr[mid]) {
        return mid;
    }
    if (target > arr[mid]) {
        return binarySearch(target, arr, mid + 1, end);
    } else {
        return binarySearch(target, arr, start, mid - 1);
    }
}

// 
function binaryToDecimal(binary: string): number {
    // base case
    if (binary.length == 1) {
        if (binary == '1') return 1;
        return 0;
    }

    if (binary.slice(-1) == '0') {
        return binaryToDecimal(binary.slice(0, binary.length - 1)) * 2;
    }
    return binaryToDecimal(binary.slice(0, binary.length - 1)) * 2 + 1;
}

// 
function decimalToBinary(decimal: number): string {
    // base case
    if (decimal <= 1) {
        return decimal.toString();
    }
    let remainder: string = (decimal % 2).toString();
    return decimalToBinary(~~(decimal / 2)).concat(remainder);
}

// https://www.geeksforgeeks.org/problems/geek-onacci-number/0
function geekOnacci(a: number = 1, b: number = 3, c: number = 2, n: number = 4): number {
    // out of scope
    if (n < 4) return 0;
    // base case
    if (n == 4) return a + b + c;

    n--;
    return geekOnacci(b, c, a + b + c, n);
}