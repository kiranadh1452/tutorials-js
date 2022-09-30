/**
 * @description: Understanding object destructuring
 */
const userDataObj = {
    firstName: "Testman",
    address: "Janakpur",
    contactNo: "98210929381",
};

/**
 * If want to access the value of a property of an object, we can do it in the following way:
 */

// Way 1 - Using dot notation
console.log("Name is: ", userDataObj.firstName);

// Way 2 - Using bracket notation
console.log("Name is: ", userDataObj["firstName"]);

// Way 3 - This is called object destructuring
const { fName } = userDataObj;
console.log("Name is: ", fName);

/**
 * Object destructuring can be used to extract multiple properties of an object
 * The syntax is as follows:
 * const { property1, property2, property3 } = objectfirstName;
 */
const { firstName, address, contactNo } = userDataObj;
