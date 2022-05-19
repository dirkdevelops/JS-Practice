 /*
        Now, let's write some JAVASCRIPT
        (And remember you can test variable values at any time by using console.log -- even the best developers still do this!)
            ☑️ Create a string variable "myFirstName" with your first name inside
            ☑️ Create a number variable "myAge" with your age inside
    */

            const myFirstName = 'Dirk';
            const myAge = '26';


    /*
        ☑️ Now, create a new variable called "myFullName" USING the "myFirstName" variable
        ☑️ Print a statement introducing yourself
    */
        const myFullName = `${myFirstName} Noyahr`;
        console.log (`Hi there my name is ${myFullName} and I am ${myAge} years old! `);

        
    /*
        ☑️ Let's next write an if statement that prints 
            > "Im older than Aaron" if you're older than 28
            > "Im the same age as Aaron" if you ARE 28
            > Otherwise it should print "Im younger than Aaron"
            (You Should Have an If, and Else if, and an Else below -- not just a single console.log)
    */

        const aaronAge = 28;

        if (myAge > aaronAge){
            console.log("Im older than Aaron");
        }

        else if (myAge == aaronAge){
            console.log ("Im the same age as Aaron");
        }

        else {
            console.log("Im younger than Aaron");
        }
    
    
    /*
        ☑️ Next, calculate whether your age is even or odd, and store it in a boolean variable "isEven"
        ☑️ Now write another if statement that prints "My age is even", or "My age is odd", 
          depending which is true
    */

          const isEven = myAge % 2 ===0;

          console.log(isEven);

          if (isEven) {
              console.log("My age is even");
          }

          else {
              console.log("My age is odd");
          }

    /*
        YOUR CODE SHOULD NOW PRINT 3 SENTENCES TO THE CONSOLE:
        ☑️ Your introduction with name and age
        ☑️ A sentence saying whether you are older or younger than me
        ☑️ A sentence saying whether your age is even or odd
     */

     /*
        LET'S GET A BIT MORE CHALLENGING
        This is a real common use case to create different strings

        ☑️ Declare a variable, "activeUserCount" and set its value to 1
        ☑️ Now, write some code to print a formatted string like so: 
            ex. "There is 1 active user"
        ☑️ Change "activeUserCount" to be 2, and run the code again. 
            it should say "There is 2 active user" -- which is not ideal
        ☑️ Let's write an if statement to handle either 1, or more users, so...
            -> if there's one user it should say "There IS 1 active USER"
            -> if there's 0 or more than 1: "There ARE 2 active USERS"
            -> (note the difference)
     */

            let activeUserCount = 2;

            if (activeUserCount > 1){
                console.log (`There ARE ${activeUserCount} active users.`);
            }

            else if (activeUserCount ==1){
                console.log (`There IS ${activeUserCount} active user.`);
            }

            else {
                console.log ("There are NO active users");
            }

// JS Practice 2

/*
    ☑️ Start by declaring an "Array literal" -- 
       that is, writing out an array from scratch! --
       and call the variable "nums"

    ☑️ Fill it with the numbers 1, 2, and 3
    ☑️ Now print the first number, and the last number from 'nums' to the console
    ☑️ Finally, change the "zero index" number to be 4
    ☑️ And print out the entire "nums array"
*/

        const nums = [1,2,3];
        console.log(nums[0], nums[2]);
        // can also do console.log (nums [0], nums [nums.length-1])
        
        nums [0] = 4;
        console.log(nums);
        

/*
    ☑️ Let's add 5 and 6 to the end of the nums array (HINT: use a "method")
        Print nums to make sure everything looks right (should be [4, 2, 3, 5, 6])
    ☑️ Now let's set the "last index" number to be 10
    ☑️ And let's "pop" off the last number and store it in a variable "lastNum"
    ☑️ Then print "lastNum" to the console!
*/

            nums.push(5,6);
            console.log(nums);

            nums[4] = 10;
            console.log(nums);

            const lastNum = nums.pop ();
            console.log(nums);
            console.log(lastNum);

/*
    ☑️ Let's declare an "Object literal" called "product" with properties for:
        > name, set to "shiny shoes"
        > brand, set to "gucci"
        > price, set to 100
        > color, set to "black"
        > soldOut, set to false

    ☑️ Let's print the name, brand, and price to the console in a single string
    ☑️ Let's add a new property / key called "sale" and set it to true
    ☑️ Let's add a new property called "tags" and set it to an array literal with
       values "men", and "luxury"
    ☑️ Let's change the soldOut property to true (don't change the original object)
    ☑️ Print out the entire object and make sure everything looks correct
*/

const product = {
 name : "shiny shoes",
 brand: "gucci",
 price: 100,
 color: "black",
 soldOut: false,
};

console.log(`Name: ${product.name}, Brand: ${product.brand}, Price: ${product.price}`);

product.sale = true;
product.tags = ["men", "luxury"];


product.soldOut = true;

console.log(product);




