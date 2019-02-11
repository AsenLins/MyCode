const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: "<div>访问的 URL 是： {{ url }}</div>"
  })

  renderer.renderToString(app, (err, html) => {
      console.log(err);
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(`
      <!DOCTYPE html>
      <html lang="zh-cn">
    
        <head>
            <meta charset="utf-8" />
            <title>Hello</title>
        </head>
        <body>${html}</body>
      </html>
    `)
  })
})

server.listen(8021,()=>{
    console.log("server is start:",8021);
})
