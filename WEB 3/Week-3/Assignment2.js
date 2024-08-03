// calculate time of the seding rq and get response 

const express = require("express");
const app = express();

app.get("/", ((req, res) => {
    const startTime = Date.now();
    res.json({
        msg: "Hi there",
    });
    const endTime = Date.now();
    console.log(`Start time: ${startTime}`);
    console.log(`End time: ${endTime}`);
    console.log(`Time taken to process request: ${endTime - startTime} ms`);
}));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
