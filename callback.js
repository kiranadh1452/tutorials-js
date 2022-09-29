const getName = () => {
    return "Toom";
};

const getSurName = () => {
    return "Holland";
};

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
