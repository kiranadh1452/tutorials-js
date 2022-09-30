/**
 * @description: Function to get the name
 */
const getName = () => {
    return "Tom";
};

/**
 * @description: Function to get the last name
 */
const getSurName = () => {
    return "Holland";
};

/**
 * @description: Function to get the full name
 * @param {Function} callBackFunction1 - First callback function
 * @param {Function} callBackFunction2 - Second callback function
 */
function displayName(callBackFunction1, callBackFunction2) {
    if (callBackFunction1() === "Tom") {
        console.log(
            "The name is ",
            callBackFunction1(),
            " ",
            callBackFunction2()
        );
    } else {
        console.log("The name is ", callBackFunction1());
    }
}

displayName(getName, getSurName);
