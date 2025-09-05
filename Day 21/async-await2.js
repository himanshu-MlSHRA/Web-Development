function fetchPostData() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Post data fetched!");
        }, 2000);
    })
}

function fetchCommonData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Common data fetched!");
        }, 3000);
    })
}

async function getBlogData() {
    try {
         const [postData, commonData] = await Promise.all([fetchPostData(), fetchCommonData()]) // This is better method
        console.log("Fetching post data...");
        // const postData = await fetchPostData();
        console.log("Post data:", postData);
        console.log("Fetching common data...");
        // const commonData = await fetchCommonData();
        console.log("Post data:", commonData);
        console.log("Fetched complete!");
       
    } catch (error) {
        console.log("Error , can't fetch the data!");
    }
}

getBlogData();