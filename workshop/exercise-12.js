// Q12
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here
function calculateAverage(grades) {
    let total = 0;
    let count = 0;
    grades.forEach(function(num) {
        total += num;
        count++;
    })
    return Math.round(total / count);
}

const gpa = function(grade) {
    if (grade < 60) {
        return 'F';
    } else if (grade < 70) {
        return 'D';
    } else if (grade < 80) {
        return 'C';
    } else if (grade < 90) {
        return 'B';
    } else {
        return 'A';
    }
}
// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]
let lst = [48, 95, 65, 48, 59, 78, 72, 65];
console.log(gpa(calculateAverage(lst)));
// Try with other values as well
