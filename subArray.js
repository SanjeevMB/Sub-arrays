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