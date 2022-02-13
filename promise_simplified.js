let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve("sucess");
    } else {
        reject("failed");
    }
});

p.then((message) => {
    console.log("this is in the " + message);
});
p.catch((message) => {
    console.log("this is in the catch" + message);
});