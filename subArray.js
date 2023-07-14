/* ===== Sub-array ===== */

// Function to print all the subarrs given in an arr

function subArray(array, length) {

    let subArrayStore = ``;

    for (let i = 0; i < length; i++) {

        for (let j = i; j < length; j++) {

            let temp = ``;

            for (let k = i; k <= j; k++) {

                temp += array[k];

            }

            subArrayStore += temp + `\n`;

        }

    }

    return subArrayStore;

}

let subArrayResult = (subArray([1, 2, 3, 4, 5], 5));

console.log(subArrayResult);


// function to return maximum sum among all subArrays

function maximumSumSubArray(array, length) {

    let maximumSubArraySum = -Infinity;

    for (let i = 0; i < length; i++) {

        for (let j = 1; j < length; j++) {

            let subArraySum = 0;

            for (let k = i; k <= j; k++) {

                subArraySum += array[k];

            }

            if (subArraySum > maximumSubArraySum) {

                maximumSubArraySum = subArraySum;

            }

        }

    }

    return maximumSubArraySum;

}

let maxSubArraySumResult = maximumSumSubArray([1, 5, -4, 3, -9, 3], 6);

console.log(maxSubArraySumResult);


// Find total sum of odd length subArrays

let sumOddLengthSubArrays = function (array) {

    let totalSumOddLengthSubArrays = 0;

    for (let i = 0; i < array.length; i++) {

        let flag = 1;

        for (let j = i; j < array.length; j++) {

            for (let k = i; k <= j; k++) {

                if (flag % 2 === 1) {

                    totalSumOddLengthSubArrays += array[k];

                }

            }

            flag++;

        }

    }

    return totalSumOddLengthSubArrays;

}

let sumOddLengthSubArraysresult = sumOddLengthSubArrays([1, 4, 2, 5, 3]);

console.log(sumOddLengthSubArraysresult);