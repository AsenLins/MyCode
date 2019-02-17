import {createApp} from './app';
export default context=>{

    return new Promise((resolve,reject)=>{

        const {app,router,store}=createApp();
        const { url } = context;

        console.info("context is:",url);
        

        router.push(url);


        router.onReady(()=>{
            /*获取匹配的路由*/
            const matchedComponents=router.getMatchedComponents();
            //console.log("路由地址：",context.url);
            //console.log("the router",router.currentRoute);
            
            if(!matchedComponents.length){
                return reject({code:404});
            }
        
            console.log("the Promise对象：",Promise);
             /*等待所有异步路由加载*/
            Promise.all(matchedComponents
                /*遍历所有组件,若有asyncData这个方法,则把当前store与router注入进组件对象*/
                .map(({asyncData})=>asyncData&&asyncData({
                    store,
                    route:router.currentRoute
                }))
            ).then(()=>{
                // After all preFetch hooks are resolved, our store is now
                // filled with the state needed to render the app.
                // Expose the state on the render context, and let the request handler
                // inline the state in the HTML response. This allows the client-side
                // store to pick-up the server-side state without having to duplicate
                // the initial data fetching on the client.
                //context.state = store.state
                context.state=store.state;
                resolve(app);

            }).catch(reject);
           


    });
    
    });
   
    //return app;

}