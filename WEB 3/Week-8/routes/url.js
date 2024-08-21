const express = require("express");
const {handleNewSorturl, handleWebsites} = require("../controllers/url")
const router = express.Router();


router.get("/:url",(req,res)=>{
    
});
router.post('/', handleNewSorturl)

module.exports = router;