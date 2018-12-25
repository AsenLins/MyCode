class webError extends Error{
    constructor(){
        super();
        this.statusCode={
            Forbidden:403,
            NotFound:404,
            ServerError:500
        }
        
    }
    _buildError(code,message){
        this.webMessage=message;
        this.webCode=code;
    }
    throwForbidden(){
        _buildError(this.statusCode.Forbidden,"Forbidden");
    }
    throwNotFount(){
        _buildError(this.statusCode.NotFound,"NotFound");
    }
    throwServerError(){
        _buildError(this.statusCode.ServerError,"ServerError");
    }
    
}

module.exports=webError;
