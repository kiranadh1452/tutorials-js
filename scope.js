/**
 * description: Global scope
 */
const myName = "Scope - Global";
const a = 1;

{
    /**
     * description: Block Scope
     */
    const myName = "Scope - Block";
    const b = 2;
    console.log("I'm in block scope : ", myName);

    function getmyName() {
        /**
         * description: Functional scope
         */
        const myName = "Functional Scope";
        const c = 3;
        console.log("I'm in functional scope : ", myName);
    }

    console.log("The value of c is ", c);
}

console.log("value of b : ", b);
console.log("I'm in global scope : ", myName);
