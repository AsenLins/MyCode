/*第三方express中间件*/

/*cookie.中间件 */
const cookie=require("cookie-parser");
/*参数转换.中间件 */
const bodyParse=require("body-parser");
/*session.中间件 */
const session=require("express-session");
/*设置跨域.中间件 */
const cors=require('cors');
/*接收上传.中间件 */
const multer=require("multer");
/*压缩gzip.中间件 */
const compression=require("compression");


module.exports={
    cookie,
    bodyParse,
    session,
    cors,
    multer,
    compression
};