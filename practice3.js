/*
 JS Practice 3
 Again you'll want to open the console to test your results
*/

/*
    ☑️ create an empty "Array Literal" and save it in the variable "days"
    ☑️ write an "if" statement to test if the array has any items (HINT: truthy / falsy)
    ☑️ inside the "if" block, print out the first item from the array
    ☑️ inside the "else" block, push a string "Mon" into the array
*/
    let days = [];

    if (days.length){
        console.log(days[0]);
    } 
    
    else{
        days.push("Mon");
    }
    



/*
    ☑️ create an "Array Literal" and save it in the variable "months" and add the values "Jan" and "Feb"
    ☑️ write an "if" statement to test if the array has any items AND the first month starts with "J" 
    ☑️ inside the "if" block, print out the first item from the array
    ☑️ inside the "else" block, push a string "Jan" into the array.
    ☑️ outside the "if else" blocks, print out the "type of" the "months" variable (HINT: arrays have a special type function)
*/

    let months = ["Jan", "Feb"];

    if (months.length && months[0][0]){
        console.log(months[0]);
    }

    else {

        months.push("Jan");
    }

    console.log(Array.isArray(months));





/*
    ☑️ create a variable "numOfWeeks" and save the number 0 in it
    ☑️ write an "if" statement that checks if the value of "numOfWeeks" is a "number" type
    ☑️ inside the "if" block, use let to create a variable "areNoWeeks", then using the value of numOfWeeks, fill this variable with a boolean (should be false if numOfWeeks is zero, and true otherwise)
    ☑️ outside the "if" block, print the value of "areNoWeeks" -- what is it?
    ☑️ can you fix this so "areNoWeeks" prints out a boolean?
*/

let numOfWeeks = 0;

if (typeof numOfWeeks === 'number'){
    console.log ('its a number')

    let areNoWeeks = numOfWeeks
    numOfWeeks = Boolean (numOfWeeks);
    console.log(numOfWeeks);
}

areNoWeeks = Boolean(areNoWeeks);

console.log(areNoWeeks);