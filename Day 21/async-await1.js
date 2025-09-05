function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ({name: "Himanshu", url: "https://himanshu.com"})
        }, 2000);
    })
}

async function getUserData() {
    try {
        console.log("Fetching user data....");
        const userData= await fetchUserData(); // This can only  use 'await' keyword when you use async over the function
        console.log("User fetched data successfully!");
        console.log("UserData: ", userData);
    } catch (error) {
        console.log("Error!", error);
    }
}
getUserData();