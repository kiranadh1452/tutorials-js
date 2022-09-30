import fetch from "node-fetch";

const getData = async () => {
    const responseObject = await fetch("https://www.google.com/");
    const textData = await responseObject.text();

    console.log(textData);
};

getData();
