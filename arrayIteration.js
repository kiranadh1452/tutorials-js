/**
 * @description: Array and Object iteration
 */

const data1 = ["a", "b", "c"];
const data2 = {
    id: "value-id",
    age: "value-age",
};

/**
 * Here, we use for...of to iterate over the object
 * Try to use followinf combinations :
 * 1. for...of with data1
 * 2. for...of with data2
 * 3. for...in with data1
 * 4. for...in with data2
 */
for (let data of data2) {
    console.log(data);
}

/**
 * Note the difference between for...of and for...in
 * for...of is used to iterate over the values of an iterable object
 * for...in is used to iterate over the keys of an object
 */
