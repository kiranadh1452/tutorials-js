const funca = () => {
    const myName = "Tom";

    const funcb = () => {
        console.log("My name is: ", myName);
    };

    return funcb;
};

const data = funca();
data();