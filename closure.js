/**
 * @description: A simple function that returns another function
 */
const funca = () => {
    const myName = "Tom";

    const funcb = () => {
        console.log("My name is: ", myName);
    };

    return funcb;
};

/**
 * Notice how on calling `data()`, we get the value of `myName`
 * This is because of the closure property of JavaScript
 */
const data = funca();
data();
