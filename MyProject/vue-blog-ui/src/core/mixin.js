


const mixinFn={
    buildStyle(scope,styleExpressList){
        
        const buildObj={};
        for(var styleName in styleExpressList){
            const styleExpress=styleExpressList[styleName];
            if(styleExpress){
                buildObj[styleName]=scope[styleName];
            }
        }
    }
}


export default mixinFn;