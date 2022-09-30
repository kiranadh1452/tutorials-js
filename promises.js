function callbackFunc(myResolve, myReject) {
    const status = "fine1";
    if (status == "fine") {
        myResolve("Ok");
    } else {
        myReject("Could not write");
    }
}

let myPromise = new Promise(callbackFunc);

myPromise
    .then(function (value) {
        console.log("The promise fullfilled: ", value);
    })
    .catch(function (err) {
        console.log("There was an error");
    });
