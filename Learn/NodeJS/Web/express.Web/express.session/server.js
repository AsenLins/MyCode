const express=require("express"); 
const session=require("express-session");
const app=express();


/*跨域中间件*/
const cors=require("cors");
/*设置跨域*/
app.use(cors({
    origin:['http://localhost:8080'],
    methods:['GET','POST'],
    credentials: true
}));

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

// Access the session as req.session
app.get('/', function(req, res, next) {
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
    debugger;
  } else {
    req.session.views = 1
    res.end('welcome to the session demo. refresh!')
    debugger;
  }
})


app.listen(4012);

console.log("app.start:",4012);