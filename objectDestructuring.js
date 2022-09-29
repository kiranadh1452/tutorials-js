const userDataObj = {
    name: "Testman",
    address: "Janakpur",
    contactNo: "98210929381",
};

// newUserDataObj = {
//     name: userDataObj.name,
//     address: userDataObj.address,
//     contactNo: userDataObj.contactNo,
// };

newUserDataObj = { ...userDataObj };