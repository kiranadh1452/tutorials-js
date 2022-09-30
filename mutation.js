/**
 * @description: Understanding the concept of mutation
 * In JS, except for primitive data types, all other data types pass the reference of the data
 * This means that if you change the value of a variable, it will change the value of the original data as well
 */
let variable1 = {
    data: "variable1",
};
let variable2;

console.log(`
****** Before changing **********
Variable 1 is: ${Object.values(variable1)}
Variable 2 is: ${variable2}
`);

variable2 = variable1;

/**
 * Here, the assignment operation would pass the reference of variable1 to variable2
 * Note that at this point of time, both variable1 and variable2 point to the same object
 */
console.log(`
****** After assigning variable 2 to variable 1 **********
Variable 1 is: ${Object.values(variable1)}
Variable 2 is: ${Object.values(variable2)}
`);

/**
 * Now, if we change the value of variable2, it will also change the value of variable1
 * This is because both variable1 and variable2 point to the same object
 */
variable2.data = "variable2";
console.log(`
****** After assigning variable 2 to variable 1 **********
Variable 1 is: ${Object.values(variable1)}
Variable 2 is: ${Object.values(variable2)}
`);

/**
 * @description: Understanding how to avoid mutation
 *
 * We can use the spread operator to create a new object.
 * Javascript will create a new object and assign the values of the original object to it
 * This way, we can avoid mutation
 */
let variable3 = {
    ...variable1,
};
