/**
 * @description: Undersatnding promises
 */

/**
 * @description: Callback function to be passed to the promise
 * @param {Function} resolve - Function to be called when the promise is resolved
 * @param {Function} reject - Function to be called when the promise is rejected
 */
function callbackFunc(myResolve, myReject) {
    const status = "fine1";
    if (status == "fine") {
        myResolve("Ok");
    } else {
        myReject("Could not write");
    }
}

/**
 * @description: Creating a promise
 * @param {Function} callbackFunc - Function to be called when the promise is resolved or rejected
 *
 * The callback function is passed two parameters:
 * 1. resolve - Function to be called when the promise is resolved
 * 2. reject - Function to be called when the promise is rejected
 */
let myPromise = new Promise(callbackFunc);

/**
 * Using the promise
 * The then() method is used to handle the promise on resolve
 * The catch() method is used to handle the promise on reject
 */
myPromise
    .then(function (value) {
        console.log("The promise fullfilled: ", value);
    })
    .catch(function (err) {
        console.log("There was an error");
    });
