function testing(fn: Function): void {
    const nums: number[] = [6, 4, 3, 1, 5, 2, 8, 7];
    fn(nums);
    console.log(nums);
}

testing(cyclicSort);
// 1. Compare and move the smaller items forward
// 2. Inner loop form the last item in each iteration, the first item is the smallest
// 3. Outer loop repeats the process excluding the sorted smallest item(s)
// Time: O(n²); Space: O(1)
function bubbleSort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1);
            }
        }
    }
}

// 1. Inner loop selects the smallest term and swap to the first position
// 2. Outer loop repeats the process excluding the sorted positions
// Time: O(n²); Space: O(1)
function selectionSort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        swap(arr, findMin(arr, i, arr.length), i);
    }
}

// 1. Inner loop insert item to the position by comparing previous item value
// 2. Outer loop repeats the process excluding the sorted positions
// Time: O(n²); Space: O(1)
function insertionSort(arr: number[]): void {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1);
            }
        }
    }
}

// Use Cyclic Sort When the array contains number of range(1, n)
// Method:
// 1. Swap the current item of value with the item at index = value - 1
// 2. If the current item fits the index, moves on to next position
// 3. Repeats steps above until all index = value - 1
// Time complexity: O(n)

function cyclicSort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] != i + 1) {
            swap(arr, i, arr[i] - 1);
        }
    }
}

// 
function mergeSort(arr: number[]): number[] {
    // base case
    if (arr.length <= 1) {
        return arr;
    }
    let mid: number = arr.length >> 1;
    let left: number[] = arr.slice(0, mid);
    let right: number[] = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));

    function merge(left: number[], right: number[]): number[] {
        let lLen = left.length, rLen = right.length;
        let lIndex = 0, rIndex = 0;
        let mergedArr = new Array(lLen + rLen);
        for (let i = 0; i < mergedArr.length; i++) {
            if (left[lIndex] < right[rIndex] || rIndex == rLen) {
                mergedArr[i] = left[lIndex];
                lIndex++;
            } else {
                mergedArr[i] = right[rIndex];
                rIndex++;
            }
        }
        return mergedArr;
    }
}


// Tools
function findMin(arr: number[], start: number, end: number): number {
    let minIndex: number = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }
    return minIndex;
}

function swap(arr: number[], a: number, b: number): void {
    const temp: number = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}