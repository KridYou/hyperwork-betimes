// Q1
const array1 = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
];

array1.forEach((subArray, index) => {
    console.log(`${index + 1} => ${subArray.join('')}`);
});

// Q2
const array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const result = array2.map((value, index) => {
    return { key: index + 1, value: value };
});

console.log(result);
