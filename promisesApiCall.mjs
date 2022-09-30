/**
 * @description: Understanding the promises using API example
 */
import fetch from "node-fetch";

// Fetching the data from the API would return a promise
const promise1 = fetch("https://www.google.com/");

/**
 * The then() method is used to handle the promise on resolve
 * The promise on resolve returns a response object : res
 * res.text() returns another promise : promise2
 */
const promise2 = promise1.then((res) => res.text());

// promise2 is a promise, so we can use the then() method on it and it finally returns required data on resolve
promise2.then((value) => console.log(value));
