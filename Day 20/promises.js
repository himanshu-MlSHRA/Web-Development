function fetchData() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if(success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error!")
            }
        }, 3000);
    })
}

fetchData()
.then((data) => {
    console.log(data);
    return data.toLowerCase();
})
.then((value) => {
    console.log(value)
})
.catch((error) => console.log(error))

// Promises is always created with a keyword 'new Promise ()'.
// Promise takes callback which actually takes 2 parameters (in above resolve and reject)
// resolve is linked with '.then'. resolve is used when everything goes true/success
// reject is linked with '.catch'. reject is used when everything goes false/unsuccess
