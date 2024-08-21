const shortid = require('shortid');
const { Url } = require("../models/url")
async function handleNewSorturl(req,res) {
    const body = req.body;
    const shrotID = shortid(8)
    if(!body.url) return res.status(400).json({msg : "Url is require"})
    await Url.create({
        shrotID: shrotID,
        redirectUrl: body.url,
        visitHistory: []
    })
    return res.json({ id : shrotID})
} 




module.exports = {
    handleNewSorturl,
}