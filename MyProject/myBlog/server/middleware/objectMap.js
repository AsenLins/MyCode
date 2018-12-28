/*把参数映射到指定对象*/
function objectMap(req, res, next) {

    req.mapObj = function (targetObj) {
        for (var key in targetObj) {
            if (req.body[key] !== undefined) {
                targetObj[key] = req.body[key];
            }
        }
        return targetObj;
    }

    next();
}

module.exports = objectMap;