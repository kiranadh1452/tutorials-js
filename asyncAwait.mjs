import fetch from "node-fetch";

/**
 * @description: Function to fetch data from the API
 */
const getData = async () => {
    // Fetch data from the API, wait till the response is received
    const responseObject = await fetch("https://www.google.com/");

    // Convert the response to JSON, wait till the conversion is done
    const textData = await responseObject.text();

    console.log(textData);
};

getData();
