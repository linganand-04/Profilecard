
 async function profile() {
    let data = await fetch('https://rydefoundation.in/stprojects/srikanth/NewPortfolio/projectDetails.json');
   
    return data
}

(async () => {
    const result = await profile();
    console.log(result.body);
})();





