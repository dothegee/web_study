const express = require('express');
const app = express();
// express 도구의 사용 방법
// const express 변수 선언
// require라는 함수
// -->node_modules라는 폴더를 뒤져서 express 도구를 꺼내온것
// 그것을 변수에 담아 사용하겟다
// 그리고 그 변수가 함수를 받아온것이고
// 그 함수의 리턴값을 app으로 받겠다

const helmet = require("helmet");
app.use(helmet());


// app.get("/",function(req,res){
//     res.send('Hello World');
// })
// get방식의 api를 하나 생성
// app안에서 주소를 만들어주는 도구(get함수)를 꺼내와서
// 첫번째 인자에 주소를 써 놓고 그 주소를 치고 들어왔을때
// 어떠한 내용을 보여줄지의 로직을 함수안에 작성
// 최종적으로 그 사용자에게 어떤 값을 내 보내줌=>res.send를 통해


// app.get("/about", function(req, res){
//     res.send('About Page')
// })
// 회사 소개 페이지 같은 경우
const mainRouter = require('./router/mainRouter')
// 디폴트로 미들웨어를 통하여 주소를 설정할 수 있음
app.use('/class101',mainRouter)
// ->localhost:3000/class101/about


app.listen(3000, function(req,res){
    console.log("서버가 실행되고 있다.")
})
// 이 컴퓨터의 3000번 방을 쓸 꺼다

