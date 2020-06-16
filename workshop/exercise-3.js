// Q3.1
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

const max = function(num1, num2) {
    if (num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

// Q3.2
// Without changing the function at all,
// Can you figure out how we could use it to determine the greater number between 4 integers?
max(max(num1, num2), max(num3, num4))

// Q3.3
// Would this work with more integers?
//Sure, but tedious.
