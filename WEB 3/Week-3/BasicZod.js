const zod = require("zod");
const express = require("express");
const app = express();

app.use(express.json())

const schema = zod.array(zod.number);

app.post("/do-checkup",(req,res)=>{
    const kidney = req.body.kidney;
    const response = schema.safeParse(kidney);
    res.send({
      response
    })
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});