const express = require('express')
const router = express.Router();
// 주소 코드만 들어가게끔 넣어 둔다
router.get("/",function(req,res){
    
    let page = req.query.page;
    console.log("[QUERY]")
    console.log(page)
    
    res.send({"key":"value"});


})

router.get("/about", function(req, res){
    res.send('About Page')
})

router.post("/postapi",function(req,res){
    res.send("POST API")
})

module.exports = router