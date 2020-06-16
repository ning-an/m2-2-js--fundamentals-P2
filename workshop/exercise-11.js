// Q11
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(grades) {
    let total = 0;
    let count = 0;
    grades.forEach(function(num) {
        total += num;
        count++;
    })
    return Math.round(total / count);
}

console.log(calculateAverage([76, 60, 83, 100, 78]));
