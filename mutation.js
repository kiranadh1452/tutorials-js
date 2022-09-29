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
console.log(`
****** After assigning variable 2 to variable 1 **********
Variable 1 is: ${Object.values(variable1)}
Variable 2 is: ${Object.values(variable2)}
`);

variable2.data = "variable2";
console.log(`
****** After assigning variable 2 to variable 1 **********
Variable 1 is: ${Object.values(variable1)}
Variable 2 is: ${Object.values(variable2)}
`);
