// import fetch from "node-fetch";

// let data123 = "";
// let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

// setTimeout(() => {
//     data123 = response.json();
//     setTimeout(() => {
//         console.log(data123.userId);
//     }, 2000);
// }, 2000);

import fetch from "node-fetch";

const promise1 = fetch("https://www.google.com/");
const promise2 = promise1.then((res) => res.text());

promise2.then((value) => console.log(value));
