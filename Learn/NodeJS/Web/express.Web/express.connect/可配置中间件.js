const app=require("connect")();


/*可配置的中间件 */
function setup(format) {
    const regexp = /:(\w+)/g;
    console.log("format",format);
    return function createLogger(req, res, next) {
      const str = format.replace(regexp, (match, property) => {
        return req[property];
      });
  
      console.log('str',str);
      next();
    }
  }
  



app.use(setup(':method :url'));
app.use(hello)

function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world');
  }

app.listen(3000);

console.log("app is start:",3000);