const express = require('express')
const router = express.Router();
// 주소 코드만 들어가게끔 넣어 둔다
router.get("/",function(req,res){
    
   // let page = req.query.page;
   // console.log("[QUERY]")
   // console.log(page)
    
   // res.send({"key":"value"});
    res.render('index', {title : "EJS 메인 페이지"}) // 응답으로 그림파일을 전달해 줄때 render
// index만 치는 이유는app.js에서 그림파일의 폴더 위치를 고정해 놔서
// 그림파일을 보내면서 데이터도 같이 보낼 수 있다.
})

router.get("/about", function(req, res){
    res.send('About Page')
})

router.post("/postapi",function(req,res){
    let body = req.body;
    console.log(body)
    res.send("POST API")
})

module.exports = router