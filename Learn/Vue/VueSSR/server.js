const Vue = require('vue')
const server = require('express')()
const fs = require('fs')
//const renderer = require('vue-server-renderer').createRenderer()
const { createBundleRenderer } = require('vue-server-renderer')
//const createApp = require('./dist/server-bundle.js');
const webpack = require('webpack');
const serverConfig = require('./webpack.server.config');

let ready
const readyPromise = new Promise(r => { ready = r })
const bundle = require('./dist/vue-ssr-server-bundle.json');
const resolve = file => path.resolve(__dirname, file)
const path = require('path')
const templatePath = resolve('./index.html')
const template = fs.readFileSync(templatePath, 'utf-8')

const renderer = createBundleRenderer(bundle,{
  runInNewContext:true,
  template
});

server.use(function(req,res){
  const context = {
    title: 'Vue HN 2.0', // default title
    url: req.url
  }
  renderer.renderToString(context, (err, html) => {
   
    if (err) {
      console.log(err);
      return err;
    }

    console.log("render",context);
    
    res.send(html)

  })

})


server.get("*",(req,res)=>{
  readyPromise.then(() => render(req, res))
})

/*
server.get('*', (req, res) => {
    const context = { url: req.url }
  
    createApp(context).then(app => {
      renderer.renderToString(app, (err, html) => {
        if (err) {
          if (err.code === 404) {
            res.status(404).end('Page not found')
          } else {
            res.status(500).end('Internal Server Error')
          }
        } else {
          res.end(html)
        }
      })
    })
  })
  */
  
  server.listen(8080)
  